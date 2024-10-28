import { useNavigate } from 'react-router-dom';

function login() {
    var uname = document.getElementsByName('uname')[0].value;
    var psw = document.getElementsByName('psw')[0].value;

    if (uname === '1234@1234' && psw === '1234') {
        alert('Login realizado com sucesso!');
        window.location.href = "/";
    } else {
        alert('Email ou senha incorretos!');
    }
}

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        login();
    };

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <h1>Login</h1>
                        <label htmlFor="uname"><b>Usuário</b></label>
                        <input type="text" placeholder="Digite o usuário" name="uname" required />
                        <br />
                        <label htmlFor="psw"><b>Senha</b></label>
                        <input type="password" placeholder="Digite a senha" name="psw" required />
                        <br />
                        <label className="checkbox-container">Lembrar de mim?
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <br />
                        <button type="submit" className="btn">Login</button>
                        <hr />
                        <br />
                        <h3>Ainda não tem conta? Crie agora mesmo!</h3>
                        <button type="button" className="btn" onClick={() => navigate("/criar-conta")}>Criar conta</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;