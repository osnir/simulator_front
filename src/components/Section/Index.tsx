import { useState, useCallback, useEffect } from 'react';
import { FormEvent } from 'react';
import Modal  from 'react-modal';
import Partner from '../Partner/Index';
import InputMask from './../InputMask/Index';
import Message from './../Message/Index';
import { api } from '../../services/api';
import './styles.css';

type Usuario = {
    nome: string;  
    telefone: string;
    faturamento: number;  
  }
  
  type Taxa = {
    id: number;
    nome: string;
    visa_master: string;
    elo_demais: string;
  }

  type Mensagem = {
    msg : string;
    type: string;
  }

Modal.setAppElement("#root");

const Section: React.FC = () => {

    const [open, setOpen] = useState(false);
    const [valor, setValor] = useState(0);
    const [taxas, setTaxas] = useState<Array<Taxa>>([]);
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
    const [mensagem, setMensagem] = useState<Mensagem>({} as Mensagem);
    
    
    const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      setUsuario({
        ... usuario,
        [e.currentTarget.name]: e.currentTarget.value
      });
    }, [usuario]);
  
    useEffect(() => {
      loadTaxas();
    }, [valor]);
  
    function onSubmitForm(event: FormEvent) {
      event.preventDefault();
    };
  
    function loadTaxas() {    
      let value = valor.toString();
  
      if (value === "0") return;
       
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d)(\d{2})$/, "$1,$2");
      value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
      value = value.replace('.', '');
      value = value.replace(',', '.');
  
      api.get(`/taxas/${value}`)
        .then((resp) => {
          const response = resp.data;
  
          if (!response.success) {
            console.log(response.error.message);
            return;
          }
  
          setTaxas(response.results.taxas);
        })
        .catch((error) => {      
          console.log(error);
        }); 
    };

    function clearPopup() {
      setUsuario({...usuario, nome: "", telefone: ""});
      setMensagem({msg: "", type: ""});
      setOpen(true);
    }

    function sendData() {
      if (!usuario.nome)  {
        setMensagem({ msg: "Informe o nome", type: "error" });
        return;
      } 
      if (!usuario.telefone)  {
        setMensagem({ msg: "Informe o telefone", type: "error" });
        return;
      }

      let telefone = usuario.telefone;
      telefone = telefone.replaceAll("(", "");
      telefone = telefone.replaceAll(")", "");
      telefone = telefone.replaceAll("-", "");
      telefone = telefone.replaceAll(" ", "");

      if (telefone.length !== 11) {
        setMensagem({ msg: "Telefone inválido", type: "error" });
        return;
      }

      const contato = {
        nome: usuario.nome.toUpperCase().trim(),
        telefone: telefone.trim()
      };

      api.post('/contato', contato)
      .then((resp) => {
        const response = resp.data;

        if (!response.success) {
          setMensagem({ msg: response.error.message, type: "error" });
          return;
        }

        setMensagem({ msg: "Obrigado! Em breve entraremos em contato.", type: "success" });
        setTimeout(() => { setOpen(false); }, 3000);  
      })
      .catch((error) => {      
        setMensagem({ msg: error, type: "error" });
      }); 
    };

    function phoneOnChange(e : any) {
      let value = e.target.value;

      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  
      e.currentTarget.value = value;

      setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }
  
  
    const Tabela = () => {
      return (
        <div className="main-content">
          <div className="div-link">
            <button className="button-link" onClick={clearPopup}>Clique aqui e entraremos em contato</button>
          </div>
          <table>
            <thead className="table-thead">
              <tr>
                <th>Taxa</th>
                <th>Visa e Master</th>
                <th>Elo e Demais</th>
              </tr>
            </thead>
            <tbody>
              {taxas.map((taxa) => (
                <tr key={taxa.id}>
                  <td>{taxa.nome}</td> 
                  <td>{taxa.visa_master}</td>
                  <td>{taxa.elo_demais}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    return(  
      <section>
        <div id="page">
          <aside>
            <Partner/>
          </aside>
          
          <main>
            <div className='main-content'>
              <form method="GET" onSubmit={onSubmitForm}>            
                <div className="div-label">
                  <label>Faturamento</label>
                </div>
                <InputMask placeholder="0,00" name="faturamento" mask="currency" prefix="R$" onChange={handleChange}/>  
                <button onClick={() => { setValor(usuario.faturamento) }}>Calcular</button>
              </form>       
            
              <Modal 
                isOpen={open} 
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => { setOpen(false) }}
                style={
                  {
                    content: {
                      top: '250px',
                      left: '600px',
                      right: '600px',
                      bottom: '200px'
                    }
                  }
                  }>
                <div className="modal">
                  <div className="modal-header">
                    <h2>Informe os dados para contato</h2>
                  </div>

                  <Message msg={mensagem.msg} type={mensagem.type}/>

                  <div className="modal-content">
                    <input 
                      name="nome" 
                      type="text"
                      maxLength={60}
                      className="modal-input" 
                      placeholder="Nome" 
                      onChange={(e) => { setUsuario({ ...usuario, [e.target.name]: e.target.value }) }}/>
                    <input 
                      name="telefone" 
                      type="text" 
                      maxLength={15}
                      className="modal-input" 
                      placeholder="(99) 99999-9999" 
                      onChange={phoneOnChange}/>
                  </div>

                  <div className="modal-footer">
                    <button onClick={sendData}>Enviar</button>
                    <button className="modal-button"/>
                    <button onClick={() => { setOpen(false) }}>Fechar</button>
                  </div>
                </div>
              </Modal>         

              { taxas.length > 0 ? <Tabela/> : null }             
            </div>
          </main>
          
          <aside>

          </aside>        
        </div>
      </section>      
    );
}

export default Section;