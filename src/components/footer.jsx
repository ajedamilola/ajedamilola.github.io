import { Container } from 'react-bootstrap'
import { FaBootstrap, FaReact } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='text-light bg-dark py-2'>
            <Container>
                <div className="text-center text">&copy; {new Date().getFullYear()} Aje Damilola</div>
                <div className="text-end text-sm text-muted text-white">
                    <FaReact className='text-white' />
                    <FaBootstrap className='text-white mx-2' />
                    <span className="text-white text-sm">
                        AOS
                    </span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer