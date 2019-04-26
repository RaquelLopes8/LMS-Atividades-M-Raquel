function criarpost(comment){
    let post = $("<div></div>").text("");
    let p = $("<p></p>").text("comment");

    post.classlist.add("post");
    p.classlist.add("comment");
    
    post.appendchild(p);
    $("conteiner").appendchild(post);
}

criarpost("Coisa loca");