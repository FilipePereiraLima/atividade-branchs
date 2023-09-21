function produto(nome, tipo, preco, descricao){
    this.nome = nome;
    this.tipo = tipo;
    this.preco = preco;
    this.desc = descricao;
 }
 
 //Chamar a função
 const meuProduto = new produto("Biquini", "Rendinha", 140, "Ideal para praia");
 
 //Pegar id da lista
 const lista = document.getElementById('lista');
 
 //Criar elemento para cada campo
 const itemPro = document.createElement('li');
 const itemTip = document.createElement('li');
 const itemPre = document.createElement('li');
 const itemDes = document.createElement('li');
 
 //Atribuir valores para cada elemento
 itemPro.innerHTML = "Produto: " + " " + meuProduto.nome;
 itemTip.innerHTML = "Tipo: " + " " + meuProduto.tipo;
 itemPre.innerHTML = "Preço: " + " " + meuProduto.preco;
 itemDes.innerHTML = "Descrição: " + " " + meuProduto.desc;
 
 //Adicionar cada elemento na lista ul
 lista.appendChild(itemPro);
 lista.appendChild(itemTip);
 lista.appendChild(itemPre);
 lista.appendChild(itemDes);