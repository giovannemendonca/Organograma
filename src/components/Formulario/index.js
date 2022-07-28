import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Inovação e Gestão'
]


const Formulario = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
                <ListaSuspensa label ='Time' itens = {times}/>
            </form>
        </section>
    )
}



export default Formulario