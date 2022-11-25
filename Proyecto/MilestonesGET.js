const headers = {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin': '*'
};

const requestMod = "http://ligafalm.eu:28100/milestones",
      requestVerProd = "http://ligafalm.eu:28100/products?page=0&size=100",
      requestVerGoals = "http://ligafalm.eu:28100/goals?page=0&size=100";
  var requestVer = "http://ligafalm.eu:28100/milestones?page=0&size=10";

function tabla(param1){
axios.get(param1,{headers})
.then((data)=> {

  var miles = data.data;

    let nom = `
    <table class="bg-personal0 text-center border border-2 text-white shadow">
    <thead class="border border-3 border-dark">
      <tr>
        <th class="col-2">id</th>
        <th class="col-2">name</th>
        <th class="col-2">start</th>
        <th class="col-2">end</th>
        <th class="col-2">progress</th>
        <th class="col-2">options</th>
      </tr>
    </thead>
    <tbody>`

    let dir = ``;
    if(miles.length > 1) {
      miles.forEach(item => {
    dir +=`
    <tr class="border-personal">
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.start}</td>
      <td>${item.end}</td>
      <td>${item.progress}</td>
      <td>
        <button type="button" class="btn btn-secondary" onclick="verGoal(${item.id})" data-toggle="modal" data-target="#ModalUp"><i class="fa-solid fa-pen-to-square"></i></button>
        <button type="button" class="btn btn-secondary" onclick="delGoal(${item.id})" data-toggle="modal" data-target="#ModalDel"><i class="fa-solid fa-trash"></i></button>
        <button type="button" class="btn btn-secondary" onclick="showGoals(${item.id})" data-toggle="modal" data-target="#ModalGoal"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
      </td>
    </tr>`
    });
    } else {
      dir +=`
      <tr class="border-personal">
        <td>${miles.id}</td>
        <td>${miles.name}</td>
        <td>${miles.description}</td>
        <td>${miles.progress}</td>
        <td>${miles.assignedTo}</td>
        <td>
          <button type="button" class="btn btn-secondary" onclick="verGoal(${miles.id})" data-toggle="modal" data-target="#ModalUp"><i class="fa-solid fa-pen-to-square"></i></button>
          <button type="button" class="btn btn-secondary" onclick="delGoal(${miles.id})" data-toggle="modal" data-target="#ModalDel"><i class="fa-solid fa-trash"></i></button>
          <button type="button" class="btn btn-secondary" onclick="showGoals(${miles.id})" data-toggle="modal" data-target="#ModalGoal"><i class="fa-sharp fa-solid fa-circle-info"></i></button>
        </td>
      </tr>`
    }
    let finTabla = `</table>
    </tbody>`;

    var result = nom + dir + finTabla;

    document.getElementById("resultados").innerHTML = result;

});
};

tabla(requestVer);

(function paginacion() {
  
  var pagina = requestVer.substring(36,37);
  var boton1 = document.getElementById("ant");
  var boton2 = document.getElementById("sig");
  pagActual = pagina+"&";

    boton1.onclick = function () {
      if (pagina == 0) {
        console.log("No hay mas paginas")
      } else {
        pagina--;
        requestVer = requestVer.replace(pagActual,pagina+'&');
        pagActual = pagina+"&";
        tabla(requestVer);
        
        console.log(requestVer);
        console.log(pagina);

      }
    };

    boton2.onclick = function () {
      pagina++
      requestVer = requestVer.replace(pagActual,pagina+'&');
      pagActual = pagina+"&";
      tabla(requestVer);
      console.log(requestVer);
      console.log(pagina);
    };

}());


(function byID() {

  var boton1 = document.getElementById("btnID");

    boton1.onclick = function () {
      var form = document.getElementById("byID");

      var formData = new FormData(form);

      form.addEventListener("submit",function(element) {
        element.preventDefault(); 
        var url = requestMod + "/"+ formData.get("id");
        console.log(url)
        tabla(url);
      
      });
  
    };
}());




//MODALES:
//modal de ver goals:
function showGoals(param1) {
  var url = requestMod+"/"+param1+"/goals"

  axios.get(url,{headers})
  .then((data)=> {
    mail= data.data;

    let nom = `
      <span>Objetivos:</span>
      <ul>
      <hr/>`
    let dir = ``;
    console.log(mail);
    mail.goals.forEach(item => {
    dir +=`
    <li>${item.name}</li>
    `
    });

    let finTabla = `
    </ul>`;

    var result = nom + dir + finTabla;

    document.getElementById("showGoals").innerHTML = result;

  });
};



//modal MODIFICAR MILESTONES:
function verGoal(param1) {
  var url = requestMod+"/"+param1

axios.get(url,{headers})
.then((data) => {

  let nom = `
  <select class="form-select" name="assignedTo-container" id="assignedTo-container">
  `
  let dir;
    if (data.data.assignedTo == "AdminUserTestUsername") {
      dir = `
        <option value="AdminUserTestUsername" selected="true">AdminUserTestUsername</option>
        <option value="UserTestUsername">UserTestUsername</option>
      `;
    } else {
      dir = `
        <option value="AdminUserTestUsername">AdminUserTestUsername</option>
        <option value="UserTestUsername" selected="true">UserTestUsername</option>
      `;
  }

  let finTabla = `</select>`;
  var result = nom + dir + finTabla;
  document.getElementById("usuarios").innerHTML = result;

  document.getElementById("goalname-container").value = data.data.name;
  document.getElementById("description-container").value = data.data.description;
  document.getElementById("progress-container").value = data.data.progress;

  //formulario
  var form = document.getElementById("formularioUpdate");

  var formData = new FormData(form);

  form.addEventListener("submit",function(element) {
    element.preventDefault();

    var envio = {
      "id":data.data.id,
      "name":formData.get("goalname-container"),
      "description":formData.get("description-container"),
      "progress":Number(formData.get("progress-container")),
      "assignedTo":formData.get("assignedTo-container")
    };

    axios.put(url,envio,{headers})
    .then(()=> {
      tabla(requestVer);
    })
    .catch((error)=>{
      console.log(error);
    });

  });

});
};

//modal ELIMINAR MILESTONES:
function delGoal(param1) {
  var url = requestMod+"/"+param1

  axios.get(url,{headers})
  .then((data)=> {
    document.getElementById("goal-del").innerHTML = data.data.name;

  var form = document.getElementById("formularioDelete");

  form.addEventListener("submit",function(element) {
    element.preventDefault();
    const envio = {
      "id":data.data.id
    };

    axios.delete(url,envio,{headers})
    .then(()=> {
      tabla(requestVer);
    })
    .catch((error)=>{
      console.log(error);
    });

  });
});

};
