function createCommentItem(commentValue, emailValue, piectureValue, idButtonDelete) {
    return {
      comment: commentValue,
      email: emailValue,
      picture: piectureValue,
      id_button_Delete:  idButtonDelete  };
  }

  var commentsList = [
    createCommentItem("Glad to know you're dowing well and they're lucky to have you. Let's chatch up when I get back !", "mail1@gmail.com", "picture1",1),
    createCommentItem("I feel the same way! Meeting so many passionate people is what life should be like :D", "mail2@gmail.com", "picture2",2),
    createCommentItem("Glad to know you're dowing well and they're lucky to have you. Let's chatch up when I get back !", "mail1@gmail.com", "picture1",3),
    createCommentItem("I feel the same way! Meeting so many passionate people is what life should be like :D", "mail2@gmail.com", "picture2",4),
    createCommentItem("Glad to know you're dowing well and they're lucky to have you. Let's chatch up when I get back !", "mail1@gmail.com", "picture1",5),
    createCommentItem("I feel the same way! Meeting so many passionate people is what life should be like :D", "mail2@gmail.com", "picture2",6)
  ];


  function createComment(itemComment) {
    var displayCommentItem = document.createElement("li");
    displayCommentItem.setAttribute("id", itemComment.id_button_Delete);
    displayCommentItem.style.backgroundColor= "aqua";
    displayCommentItem.style.borderBottomStyle="solid";
    displayCommentItem.style.listStyleType="none";
    displayCommentItem.innerHTML = `
     ${itemComment.comment}
    <br />
    ${itemComment.email}
    <br />
    ${itemComment.picture}
    <br />
    <br />
    `;
  
    
    // add delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.color = "White";
    deleteBtn.style.backgroundColor="Red";
    deleteBtn.style.width="100px";
    deleteBtn.style.height="30px";
    deleteBtn.style.marginLeft="50%";
    deleteBtn.style.borderRadius="6px";
    // set ID 
    deleteBtn.setAttribute("data-value", itemComment.id_button_Delete);


     deleteBtn.addEventListener("click", function () {
      
      deleteButton(itemComment.id_button_Delete);
     });
    

    displayCommentItem.appendChild(deleteBtn);
    return displayCommentItem;
  }


  function deleteButton(id_button_delete){
    var display = document.getElementById(id_button_delete);

    display.parentElement.removeChild(display);
  }


  function displayComments(CommentsList) {
    var ulList = document.createElement("ul");
  
    
    for (var index = 0; index < CommentsList.length; index++) {
      var toCommentItem = CommentsList[index];
      var commentItemHTML = createComment(toCommentItem);
      ulList.appendChild(commentItemHTML);
    }
    return ulList;
  }

  var listHTML = displayComments(commentsList);
  document.body.appendChild(listHTML);

  
  

var inputComment = document.getElementById('commenttext');
console.log(inputComment);

var btnAdd = document.getElementById("addbtn");

btnAdd.addEventListener("click", function () {


   // Gererate random the id for button
   var idButton = Math.floor(Math.random() * 100) + 1;

  // add in list of comments - email and picture hardcodded
  var comment = createCommentItem(inputComment.value, "email3@gmail.com", "picture3", idButton);
  commentsList.push(comment);


  var itemCommentHTML = createComment(comment);
  listHTML.appendChild(itemCommentHTML);
});

  