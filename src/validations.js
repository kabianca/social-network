export function validate(name, email, password, repeatPassword) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validatedEmail = regex.test(email);
    if (password !== repeatPassword) {
        return 'As duas senhas não coincidem!'
    } if (name && email && validatedEmail && password) {
        return '';
    } if (!email || !password) {
        return 'Preencha todos os campos!';
    }
    return 'Preencha o campo de email corretamente!';
}