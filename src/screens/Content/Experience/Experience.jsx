import './Experience.css';
import { Cell } from '../../../components/Cell/Cell';

export const Experience = () => {
    return (
        <div className='list-wrapper'>
            <div className='cronoCell'>
                <p>2025</p>
                <Cell titleJSX={<p className='primary-text'>
                    Sr. Product Designer at <a target='_blank' href='https://www.bitpanda.com' rel="noreferrer">Bitpanda</a></p>} subtitle="Fintech" />
            </div>
            <div className='cronoCell'>
                <p>2022</p>
                <Cell titleJSX={<p className='primary-text'>
                    Sr. Product Designer at <a target='_blank' href='https://www.linkedin.com/company/boopos/posts/?feedView=all' rel="noreferrer">Boopos</a></p>} subtitle="Fintech" />
            </div>

            <div className='cronoCell'>
                <p>2021</p>
                <Cell titleJSX={<p className='primary-text'>
                    Sr. Product Designer at <a target='_blank' href='https://www.linkedin.com/company/maasglobal/posts/?feedView=all' rel="noreferrer">Whim</a></p>} subtitle="Mobility" />
            </div>

            <div className='cronoCell'>
                <p>2020</p>
                <Cell titleJSX={<p className='primary-text'>
                    Product Designer at <a target='_blank' href='https://newsroom.ferrovial.com/es/noticias/maas-global-compra-wondo-a-ferrovial-que-se-convertira-en-accionista-de-referencia-de-la-compania/' rel="noreferrer">Wondo</a></p>} subtitle="Mobility" />
            </div>

            <div className='cronoCell'>
                <p>2018</p>
                <Cell titleJSX={<p className='primary-text'>
                    Visual Designer at <a target='_blank' href='https://www.linkedin.com/company/ontruck-transport/' rel="noreferrer">Ontruck</a></p>} subtitle="Freight Transport" />
            </div>

            <div className='cronoCell'>
                <p>2017</p>
                <Cell titleJSX={<p className='primary-text'>
                    Visual Designer at <a target='_blank' href='https://www.linkedin.com/company/insud-pharma/posts/?feedView=all' rel="noreferrer">Insud Pharma</a></p>} subtitle="Pharma" />
            </div>

            <div className='cronoCell'>
                <p>2016</p>
                <Cell titleJSX={<p className='primary-text'>
                    UX/UI Designer at <a target='_blank' href='https://www.linkedin.com/company/doctor24/posts/?feedView=all' rel="noreferrer">Doctor24</a></p>} subtitle="Telemedicine" />
            </div>

            <div className='cronoCell'>
                <p></p>
                <Cell titleJSX={<p className='primary-text'>
                    Substitute UX/UI Designer at TF-Artes Gráficas</p>} subtitle="Print Industry" />
            </div>

            <div className='cronoCell'>
                <p>2014</p>
                <Cell titleJSX={<p className='primary-text'>
                    Intern Front-end/Designer at BFake</p>} subtitle="Digital Ipad Magazine" />
            </div>

            <div className='cronoCell'>
                <p>2012</p>
                <Cell titleJSX={<p className='primary-text'>
                    Graphic Design student at <a target='_blank' href='https://esdmadrid.es/' rel="noreferrer">e/s/d Madrid</a> </p>} subtitle="Studies" />
            </div>

            <div className='cronoCell'>
                <p>2010</p>
                <Cell titleJSX={<p className='primary-text'>
                    Arts High School student </p>} subtitle="Studies" />
            </div>
        </div>

    )
}
