const firstbtn = document.querySelector(".nav-tabs  button");
const nav = document.querySelector(".nav-tabs ");
const tabContent = document.querySelector("#nav-tabContent");
const select = document.querySelector(".form-select");


let closeIcon;
let num = 0;
let url = "";
let count = 0;










firstbtn.addEventListener("click", function () {


    if (select.value == 0) {
        console.log("selected something");
    } else {
        console.log(select.value);
        url = document.URL;
        console.log(url);
        const btn = document.createElement("button");
        const div = document.createElement("div");
        const li = document.createElement("li");
        li.classList.add("bi");
        li.classList.add("bi-x");
        btn.classList.add("nav-link");
        btn.setAttribute("id", `nav-page${num}-tab`);
        btn.setAttribute("data-bs-toggle", "tab");
        btn.setAttribute("data-bs-target", `#nav-page${num}`);
        btn.setAttribute("type", "button");
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-controls", `nav-page${num}`)
        btn.setAttribute("aria-selected", "false");
        btn.textContent = `Form`
        btn.appendChild(li);
        nav.appendChild(btn);


        div.classList.add("tab-pane");
        div.classList.add("fade");


        div.setAttribute("id", `nav-page${num}`);
        div.setAttribute("role", "tabpanel");
        div.setAttribute("aria-labelledby", `nav-page${num}`);
        div.setAttribute("tabindex", "0");
        num++;

        if (select.value == 1) {

            div.innerHTML =
                `  <form action="" id="form">

                <div class="row border">

                
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                
           
              
                        <h1>Formulario de supervicion de columna</h1>
        
                        
                </div>
                <div class="row ">
                    <div class="form-group 	col-6 border space">
                        <label for="nombre">Nombre del proyecto</label>
                        <input type="text" class="form-control" id="nombre" placeholder="
                ">
                    </div>
        
                    <div class="form-group col-6 border space">
                        <label for="fecha">Fecha</label>
                        <input type="date" class="form-control" id="fecha" placeholder="">
                        <label for="ejes">Ejes</label>
                        <input type="text" class="form-control" id="ejes" placeholder="
               ">
                    </div>
                  
                    <div class="form-group col-6 border space">
                        <label for="elemento">Elemento</label>
                        <input type="text" class="form-control" id="elemento" placeholder="">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" placeholder="
                ">
                    </div>
                    
                    <div class="form-group col-6 border space">
                        <label for="nivel">Nivel</label>
                        <input type="text" class="form-control" id="nivel" placeholder="">
                    </div>
        
                </div>
        
                <div class="row ">

        
                    <div class="form-group col-xl-6 border ">
        
                        <div class="row space box" id="camara">                       
                            <div class="form-group col-7 border" >

                            

                           
                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>

                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                           
                               
                        
                            <canvas  class="canvaselement"   ></canvas>
                            </div>





        
                            <div class="form-group col-5 border">

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>

                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">


                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        


                            <div class="form-group col-5  box border" >

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>

                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                        <canvas  class="canvaselement "  ></canvas>

                            </div>
        
                        </div>
        
                    </div>
        
        
                    
                    <div class="form-group col-xl-6 border ">
        
        
                        <div class="row space">
                            <div class="form-group col-6">
                                <label for="dimensiones">Dimensiones</label>
                                <input type="text" class="form-control" id="dimensiones" placeholder="
                             ">
                            </div>
                            <div class="form-group col-6">
                                <label for="rec">Recubrimiento</label>
                                <input type="text" class="form-control" id="rec" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="ref1">Refuerzo princ</label>
                                <input type="text" class="form-control" id="ref1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-5">
                                <label for="No">No & Se de estribos</label>
                                <input type="text" class="form-control" id="No" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="l1">Long solape</label>
                                <input type="text" class="form-control" id="l1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="ub">Ubicacion de solapes</label>
                                <input type="text" class="form-control" id="ub" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="t1">Tipo y long de ganchos</label>
                                <input type="text" class="form-control" id="t1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="long1">Long confinamiento</label>
                                <input type="text" class="form-control" id="long1" placeholder="
                            ">
                            </div>
        
                            <div class="form-group col-4">
                                <label for="long2">Long desarrollo</label>
                                <input type="text" class="form-control" id="long2" placeholder="
                            ">
                            </div>
        
        
                            <div class="form-group col-12">
                                <label for="exampleFormControlTextarea1">Comentarios</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1 " rows="4"></textarea>
                            </div>
                        </div>
                    </div>
        
                </div>




















                
                <div class="row">
                
                
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="form-group biggerBox col-6 border">


                               <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>

                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="form-group col-5 biggerBox border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             


                    
                    
                        </div>
                    </div>
        
                </div>
    

                
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario de supervicion de columna</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             








        

                <div class="form-group col-5 border">

      
              

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>

            </form>`;
        }








        if (select.value == 2) {
            div.innerHTML = `<form action="">
            <div class="row border">
               
     <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OC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1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                    
                    <h1>Formulario de supervicion de vigas y porticos </h1>
    
            </div>
            <div class="row ">
            <div class="form-group 	col-6 border space">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" class="form-control" id="nombre" placeholder="
        ">
            </div>

            <div class="form-group col-6 border space">
                <label for="fecha">Fecha</label>
                <input type="date" class="form-control" id="fecha" placeholder="">
                <label for="ejes">Ejes</label>
                <input type="text" class="form-control" id="ejes" placeholder="
       ">
            </div>
          
            <div class="form-group col-6 border space">
                <label for="elemento">Elemento</label>
                <input type="text" class="form-control" id="elemento" placeholder="">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" placeholder="
        ">
            </div>
            
            <div class="form-group col-6 border space">
                <label for="nivel">Nivel</label>
                <input type="text" class="form-control" id="nivel" placeholder="">
            </div>

        </div>

    
            <div class="row ">
        
            <div class="form-group col-xl-6 border ">

                <div class="row space box" id="camara">                       
                    <div class="form-group col-6 border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                    <div class="form-group col-6 border">
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                <canvas  class="canvaselement "  ></canvas>
                    </div>

                    <div class="form-group col-6 box  border" >

                        <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>

                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
                <canvas  class="canvaselement "  ></canvas>
                    </div>

                </div>

            </div>
    
                <div class="form-group col-xl-6  border ">
    
    
                    <div class="row space">
                   

                        <div class="form-group col-3">
                            <label for="d1">dimensiones</label>
                            <input type="text" class="form-control" id="d1" placeholder="
                ">
                        </div>
                        <div class="form-group col-5">
                            <label for="rec">Recubrimiento</label>
                            <input type="text" class="form-control" id="rec" placeholder="
                ">
                        </div>
                        <div class="form-group col-4">
                            <label for="est">estribos no y se1 s2</label>
                            <input type="text" class="form-control" id="est" placeholder="
               ">
                        </div>
                       
                        <div class="form-group col-1 numberoAcero">
                        #acero
                        <span>
                        1
                        </span>
                        <span>
                        2
                        </span>
                        <span>
                        3
                        </span>
                        <span>
                        4
                        </span>
                        <span>
                        5
                        </span>
                        <span>
                        6
                        </span>
                     
                        </div>

                        <div class="form-group col-2">
                            <label for="d"> vano inf</label>
                            <input type="text" class="form-control" id="d" placeholder="">
                            <input type="text" class="form-control" id="d" placeholder="">
                            <input type="text" class="form-control" id="d" placeholder="">
                            <input type="text" class="form-control" id="d" placeholder="">
                            <input type="text" class="form-control" id="d" placeholder="">
                            <input type="text" class="form-control" id="d" placeholder="">
                        </div>
                        <div class="form-group col-2">
                            <label for="s">vano sup</label>
                            <input type="text" class="form-control" id="s" placeholder="">
                            <input type="text" class="form-control" id="s" placeholder="">
                            <input type="text" class="form-control" id="s" placeholder="">
                            <input type="text" class="form-control" id="s" placeholder="">
                            <input type="text" class="form-control" id="s" placeholder="">
                            <input type="text" class="form-control" id="s" placeholder="">
                        </div>
                        <div class="form-group col-2">
                            <label for="x">adic.apoyo1</label>
                            <input type="text" class="form-control" id="x" placeholder="">
                            <input type="text" class="form-control" id="x" placeholder="">
                            <input type="text" class="form-control" id="x" placeholder="">
                            <input type="text" class="form-control" id="x" placeholder="">
                            <input type="text" class="form-control" id="x" placeholder="">
                            <input type="text" class="form-control" id="x" placeholder="">
                        </div>

                        <div class="form-group col-2">
                        <label for="x">adic.apoyo2</label>
                        <input type="text" class="form-control" id="x" placeholder="">
                        <input type="text" class="form-control" id="x" placeholder="">
                        <input type="text" class="form-control" id="x" placeholder="">
                        <input type="text" class="form-control" id="x" placeholder="">
                        <input type="text" class="form-control" id="x" placeholder="">
                        <input type="text" class="form-control" id="x" placeholder="">
                    </div>

                        <div class="form-group col-3">
                            <label for="w">Long ac/ap</label>
                            <input type="text" class="form-control" id="w" placeholder="">
                            <input type="text" class="form-control" id="w" placeholder="">
                            <input type="text" class="form-control" id="w" placeholder="">
                            <input type="text" class="form-control" id="w" placeholder="">
                            <input type="text" class="form-control" id="w" placeholder="">
                            <input type="text" class="form-control" id="w" placeholder="">
                        </div>
                        
                       
                        <div class="form-group col-4">
                            <label for="long">Long de des</label>
                            <input type="text" class="form-control" id="long" placeholder="">
                        </div>
    
                        <div class="form-group col-2">
                            <label for="d4">Long. Solape</label>
                            <input type="text" class="form-control" id="d4" placeholder="
                ">
                        </div>
                        <div class="form-group col-2">
                            <label for="d2">Ubic. Solape</label>
                            <input type="text" class="form-control" id="d2" placeholder="
                ">
                        </div>
                        <div class="form-group col-2">
                            <label for="d3">Ganchos</label>
                            <input type="text" class="form-control" id="d3" placeholder="
                ">
                        </div>
                        <div class="form-group col-2">
                            <label for="d5">Long Conf 2h</label>
                            <input type="text" class="form-control" id="d5" placeholder="
                ">
                        </div>
                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Comentarios</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1 " rows="2"></textarea>
                        </div>
                    </div>
                </div>
    
            </div>
    
    
            <div class="row ">
        
            <div class="form-group col-6  border ">
            <span>Fotos de levantamiento</span>
                <div class="row space box" id="camara">                       
                    <div class=" biggerBox border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                </div>

            </div>









            
            <div class="form-group col-6  border ">
            <span>Observaciones</span>
            <div class="row space box" id="camara"> 
         
            <div class=" biggerBox border">


               <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>

                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
            <canvas  class="canvaselement"   ></canvas>
            </div>

     

          

            
            
                </div>
            </div>

        </div>


      
        
        <div class="row border" id="after1">
        <div class="form-group col-6"><span>Localizacion</span></div>
        <div class="form-group col-6"><span>Detalles</span></div>
    </div>
    <br>



    <div class="row border space" id="secondpage" >
         
    <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
    AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
         
    <h2>Formulario de supervicion de vigas y porticos </h2>


    <div class="row box secondpage" id="camara">   
     


 










    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>

    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>

    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>
    </div>
</div>
        </form>`
        }
        if (select.value == 3) {
            div.innerHTML = ` <form action="">
            <div class="row border">
               
     <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OC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1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                    <h1>Formulario de viga columna acero </h1>
    
            </div>
            <div class="row ">
            <div class="form-group 	col-6 border space">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" class="form-control" id="nombre" placeholder="
        ">
            </div>

            <div class="form-group col-6 border space">
                <label for="fecha">Fecha</label>
                <input type="date" class="form-control" id="fecha" placeholder="">
                <label for="ejes">Ejes</label>
                <input type="text" class="form-control" id="ejes" placeholder="
       ">
            </div>
          
            <div class="form-group col-6 border space">
                <label for="elemento">Elemento</label>
                <input type="text" class="form-control" id="elemento" placeholder="">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" placeholder="
        ">
            </div>
            
            <div class="form-group col-6 border space">
                <label for="nivel">Nivel</label>
                <input type="text" class="form-control" id="nivel" placeholder="">
            </div>

        </div>
            
            <div class="row ">
        
            <div class="form-group col-xl-6 border ">

                <div class="row space box" id="camara">                       
                    <div class="form-group col-6 border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                    <div class="form-group col-6 border">
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                <canvas  class="canvaselement "  ></canvas>
                    </div>

                    <div class="box border" >
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                <canvas  class="canvaselement "  ></canvas>
                    </div>

                </div>

            </div>
    
    
                <div class="form-group col-xl-6 border ">
    
    
                    <div class="row space">
                        <div class="form-group col-12">
                            <label for="t1">Tipo de perfil en obra</label>
                            <input type="text" class="form-control" id="t1" placeholder="
                        ">
                        </div>
                        <div class="form-group col-12">
                            <label for="t2">Tipo de perfil en planos</label>
                            <input type="text" class="form-control" id="t2" placeholder="
                    ">
                        </div>
    
    
    
    
                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Comentarios</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1 " rows="10"></textarea>
                        </div>
                    </div>
                </div>
    
            </div>
    
     <div class="row ">
        
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="biggerBox border">

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>

                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="biggerBox border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             

                    


                    
                    
                        </div>
                    </div>
        
                </div>
    
        
               
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario de viga columna acero</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             










                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>
        </form>`
        }
        if (select.value == 4) {

            div.innerHTML = ` <form action="">
            <div class="row border">
                
    
                   <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OC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1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                    <h1>Formulario De Supervicion de Zapata </h1>
    
            </div>
            <div class="row ">
            <div class="form-group 	col-6 border space">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" class="form-control" id="nombre" placeholder="
        ">
            </div>

            <div class="form-group col-6 border space">
                <label for="fecha">Fecha</label>
                <input type="date" class="form-control" id="fecha" placeholder="">
                <label for="ejes">Ejes</label>
                <input type="text" class="form-control" id="ejes" placeholder="
       ">
            </div>
          
            <div class="form-group col-6 border space">
                <label for="elemento">Elemento</label>
                <input type="text" class="form-control" id="elemento" placeholder="">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" placeholder="
        ">
            </div>
            
            <div class="form-group col-6 border space">
                <label for="nivel">Nivel</label>
                <input type="text" class="form-control" id="nivel" placeholder="">
            </div>

        </div>
        
    
            <div class="row ">
        
            <div class="form-group col-xl-6 border ">

                <div class="row space box" id="camara">                       
                    <div class="form-group col-6 border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                    <div class="form-group col-6 border">
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                <canvas  class="canvaselement "  ></canvas>
                    </div>

                    <div class="box  border" >
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                <canvas  class="canvaselement "  ></canvas>
                    </div>

                </div>

            </div>
    
    
                <div class="form-group col-xl-6 border ">
    
    
                    <div class="row space">
                        <div class="form-group col-3">
                            <label for="dimensiones">Dimensiones</label>
                            <input type="text" class="form-control" id="dimensiones" placeholder="
                    ">
                        </div>
                        <div class="form-group col-3">
                            <label for="espesor">Espesor</label>
                            <input type="text" class="form-control" id="espesor" placeholder="
                        ">
                        </div>
                        <div class="form-group col-3">
                            <label for="df">DF</label>
                            <input type="text" class="form-control" id="df" placeholder="
                     ">
                        </div>
                        <div class="form-group col-3">
                            <label for="recumiento">Recubrimiento</label>
                            <input type="text" class="form-control" id="recumiento" placeholder="
                      ">
                        </div>
                        <div class="form-group col-6">
                            <label for="refuerzox">Refuerzo en x inf</label>
                            <input type="text" class="form-control" id="refuerzox" placeholder="
                       ">
                        </div>
                        <div class="form-group col-6">
                            <label for="refuerzos">Refuerzo en x sup</label>
                            <input type="text" class="form-control" id="refuerzos" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="refuerzoinf">Refuerzo en y inf</label>
                            <input type="text" class="form-control" id="refuerzoinf" placeholder="
                        ">
                        </div>

                        <div class="form-group col-6">
                        <label for="refuerzoinf1">Refuerzo En y Sup</label>
                        <input type="text" class="form-control" id="refuerzoinf1" placeholder="
                    ">
                    </div>
                        <div class="form-group col-6">
                            <label for="SECCION">Seccion elemento vertical</label>
                            <input type="text" class="form-control" id="SECCION" placeholder="
                       ">
                        </div>

                        <div class="form-group col-6">
                        <label for="RE1">Refuerzo pric elemento vertical</label>
                        <input type="text" class="form-control" id="RE1" placeholder="
                   ">
                    </div>

                    <div class="form-group col-6">
                    <label for="no1">No & Se de estribos </label>
                    <input type="text" class="form-control" id="no1" placeholder="
               ">
                </div>

                <div class="form-group col-6">
                <label for="no2">Long de desarrolo, ganchos </label>
                <input type="text" class="form-control" id="no2" placeholder="
           ">
            </div>
    
    
    
                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Comentarios</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1 " rows="5"></textarea>
                        </div>
                    </div>
                </div>
    
            </div>
    
    





            <div class="row ">
        
            <div class="form-group col-6  border ">
            <span>Fotos de levantamiento</span>
                <div class="row space box" id="camara">                       
                    <div class="biggerBox border">
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                </div>

            </div>






            
            <div class="form-group col-6  border ">
            <span>Observaciones</span>
            <div class="row space box" id="camara"> 
         
            <div class="biggerBox border">

            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
        </svg></label>

        
         <input type="file"
            id="${count++}" name="avatar"
            accept="image/png, image/jpeg">
            
            <canvas  class="canvaselement"   ></canvas>
            </div>

     


            
            
                </div>
            </div>

        </div>


      
        
        <div class="row border" id="after1">
        <div class="form-group col-6"><span>Localizacion</span></div>
        <div class="form-group col-6"><span>Detalles</span></div>
    </div>
    <br>



    <div class="row border space" id="secondpage" >
         
    <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
    AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
         
    <h2>Formulario De Supervicion de Zapata</h2>


    <div class="row box secondpage" id="camara">   
     


 










    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>

    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>

    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>
    </div>
</div>
        </form>`
        }

        if (select.value == 5) {

            div.innerHTML = ` <form action="">
            <div class="row border">
              
    
                     <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OC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1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                    <h1>Formulario De Supervicion de Zapata con pilotes</h1>
    
            </div>
            <div class="row ">
            <div class="form-group 	col-6 border space">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" class="form-control" id="nombre" placeholder="
        ">
            </div>

            <div class="form-group col-6 border space">
                <label for="fecha">Fecha</label>
                <input type="date" class="form-control" id="fecha" placeholder="">
                <label for="ejes">Ejes</label>
                <input type="text" class="form-control" id="ejes" placeholder="
       ">
            </div>
          
            <div class="form-group col-6 border space">
                <label for="elemento">Elemento</label>
                <input type="text" class="form-control" id="elemento" placeholder="">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" placeholder="
        ">
            </div>
            
            <div class="form-group col-6 border space">
                <label for="nivel">Nivel</label>
                <input type="text" class="form-control" id="nivel" placeholder="">
            </div>

        </div>

    
            <div class="row ">
        
            <div class="form-group col-xl-6 border ">

                <div class="row space box" id="camara">                       
                    <div class="form-group col-6 border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                    <div class="form-group col-6 border">
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                <canvas  class="canvaselement "  ></canvas>
                    </div>

                    <div class="box border" >
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                <canvas  class="canvaselement "  ></canvas>
                    </div>

                </div>

            </div>
    
                <div class="form-group col-xl-6 border ">
    
    
                    <div class="row space">
                        <div class="form-group col-6">
                            <label for="diametroylongitud">Diametro y longitud</label>
                            <input type="text" class="form-control" id="diametroylongitud" placeholder="">
                        </div>
                        <div class="form-group col-6">
                            <label for="espesor">Espesor cabezal</label>
                            <input type="text" class="form-control" id="espesor" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="df">Df y sep entre pilotes</label>
                            <input type="text" class="form-control" id="df" placeholder="
                     ">
                        </div>
                        <div class="form-group col-6">
                            <label for="recubrimiento">Recubrimiento</label>
                            <input type="text" class="form-control" id="recubrimiento" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="refuerzop">Refuerzo Princ</label>
                            <input type="text" class="form-control" id="refuerzop" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="aceroad">Acero adicional</label>
                            <input type="text" class="form-control" id="aceroad" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="estribos">Estribos</label>
                            <input type="text" class="form-control" id="estribos" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="solapes">Solapes</label>
                            <input type="text" class="form-control" id="solapes" placeholder="
                      ">
                        </div>
                        <div class="form-group col-6">
                            <label for="Ganchos">Ganchos</label>
                            <input type="text" class="form-control" id="Ganchos" placeholder="
                    ">
                        </div>
                        <div class="form-group col-6">
                            <label for="longd">Long. Desarrollo dentro de pl</label>
                            <input type="text" class="form-control" id="longd" placeholder="
                        ">
                        </div>
    
    
    
    
                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Comentarios</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1 " rows="6"></textarea>
                        </div>
                    </div>
                </div>
    
            </div>
    
    




            <div class="row ">
        
            <div class="form-group col-6  border ">
            <span>Fotos de levantamiento</span>
                <div class="row space box" id="camara">                       
                    <div class="form-group biggerBox col-12 border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                </div>

            </div>






            
            <div class="form-group col-6  border ">
            <span>Observaciones</span>
            <div class="row space box" id="camara"> 
         
            <div class="biggerBox border">

            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
        </svg></label>

        
         <input type="file"
            id="${count++}" name="avatar"
            accept="image/png, image/jpeg">
            
            <canvas  class="canvaselement"   ></canvas>
            </div>

     

           

            
            
                </div>
            </div>

        </div>


       
        
        <div class="row border" id="after1">
        <div class="form-group col-6"><span>Localizacion</span></div>
        <div class="form-group col-6"><span>Detalles</span></div>
    </div>
    <br>



    <div class="row border space" id="secondpage" >
         
    <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
    AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
         
    <h2>Formulario De Supervicion de Zapata con pilotes</h2>


    <div class="row box secondpage" id="camara">   
     


 










    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>

    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>

    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    
    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>


    <div class="form-group col-5 border">

    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
</svg></label>


 <input type="file"
    id="${count++}" name="avatar"
    accept="image/png, image/jpeg">
    
    <canvas  class="canvaselement"   ></canvas>
    </div>
    </div>
</div>
        </form>`
        }
        if (select.value == 6) {
            div.innerHTML = `<form action="">
            <div class="row border">
              <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OC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1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                    <h1>Formulario De Supervicion edificio de muro</h1>
    
            </div>
            <div class="row ">
            <div class="form-group 	col-6 border space">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" class="form-control" id="nombre" placeholder="
        ">
            </div>

            <div class="form-group col-6 border space">
                <label for="fecha">Fecha</label>
                <input type="date" class="form-control" id="fecha" placeholder="">
                <label for="ejes">Ejes</label>
                <input type="text" class="form-control" id="ejes" placeholder="
       ">
            </div>
          
            <div class="form-group col-6 border space">
                <label for="elemento">Elemento</label>
                <input type="text" class="form-control" id="elemento" placeholder="">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" placeholder="
        ">
            </div>
            
            <div class="form-group col-6 border space">
                <label for="nivel">Nivel</label>
                <input type="text" class="form-control" id="nivel" placeholder="">
            </div>

        </div>

    
            <div class="row ">
        
            <div class="form-group col-xl-6 border ">

                <div class="row space box" id="camara">                       
                    <div class="form-group col-6 border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                    <div class="form-group col-6 border">
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                <canvas  class="canvaselement "  ></canvas>
                    </div>

                    <div class="box  border" >
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                <canvas  class="canvaselement "  ></canvas>
                    </div>

                </div>

            </div>
    
    
                <div class="form-group col-xl-6 border ">
    
    
                    <div class="row space">
                        <div class="form-group col-3">
                            <label for="Espesor">Espesor</label>
                            <input type="text" class="form-control" id="Espesor" placeholder="
                        ">
                        </div>

                        <div class="form-group col-3">
                        <label for="Espesor1">Dim. zap Lxb </label>
                        <input type="text" class="form-control" id="Espesor1" placeholder="
                    ">
                    </div>

                    <div class="form-group col-3">
                    <label for="Espesor2">Acero zap Long </label>
                    <input type="text" class="form-control" id="Espesor2" placeholder="
                ">
                </div>

                <div class="form-group col-3">
                <label for="Espesor3">Acero zap Long </label>
                <input type="text" class="form-control" id="Espesor3" placeholder="
            ">
            </div>
                        <div class="form-group col-3">
                            <label for="ref">Refuerzo vertical</label>
                            <input type="text" class="form-control" id="ref" placeholder="
                        ">
                        </div>
                        <div class="form-group col-3">
                            <label for="ref1">Refuerzo horizontal</label>
                            <input type="text" class="form-control" id="ref1" placeholder="
                      ">
                        </div>
                        <div class="form-group col-3">
                            <label for="acero">Acero en interseccion</label>
                            <input type="text" class="form-control" id="acero" placeholder="
                        ">
                        </div>
                        <div class="form-group col-3">
                            <label for="bor">Borde (puerta o ventana)</label>
                            <input type="text" class="form-control" id="bor" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="gan">Ganchos</label>
                            <input type="text" class="form-control" id="gan" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="long">Long desarrollo</label>
                            <input type="text" class="form-control" id="long" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="viga">Vigas de amarres</label>
                            <input type="text" class="form-control" id="viga" placeholder="
                        ">
                        </div>
                        <div class="form-group col-6">
                            <label for="acero">Acero en viga de amarre</label>
                            <input type="text" class="form-control" id="acero" placeholder="
                        ">
                        </div>

                        <div class="form-group col-6">
                        <label for="acero1">Recubrimiento</label>
                        <input type="text" class="form-control" id="acero1" placeholder="
                    ">
                    </div>
    
    
    
                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Comentarios</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1 " rows="4"></textarea>
                        </div>
                    </div>
                </div>
    
            </div>






    
     <div class="row ">
        
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="biggerBox border">

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>

                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="biggerBox border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             

                    </div>
        
                </div>
    
        
              
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario De Supervicion edificio de muro</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             










                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>
        </form> `
        }

        if (select.value == 7) {
            div.innerHTML = `<form action="">
            <div class="row border">
              <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6qm7U8A58G/IOd+oeKwGlOl1c2tOf5251TeKo9rDFLz7Hf7Y/fdB4Li0v04q664HUTP3ioulU7taeCUgiIHucR16DwUw9rF/wDcb+NRY33JvsMn4J/Qq64/jhyfTnNqOJgdPTXV9VDy5hzASdvo3U55ZktBi1gq73XB8kNO32mx7FxJ5BV40+1jtGHQXmlq7PNVMudY+cbPA2Y7wKEpo0byf6qMEoZpXg1FG31WYdCzkD9I2W8qtmiOoNos2X3G1SvdS268zcdM1/dHITyBPuOysNd7tQWO2z3a5VDYaamYXveT4DwHmhDurhqqKkrYjBWU0U8Z5FsjA4fnUEWjWLU7NLxW02GWiglggPGxsrfabHvsCTusZLrtqbFeviAUdpkrO1EHCyMlpefDfdDMJOyLQ3Ar881EVA63VHM9pSO4OfUjuWqHTbVrC5OPC8tNfTA7imqX7cumx5LE5Rq9q1hskMN/oLRBLOOJkYaXO267Armj1T1jkxs5abZaGWwN4u2e3by7t0NmWh1tynGnil1BwqppyDsaiBpDSOu3d+dbxjuq2C5MGtoL5DHM7uhnPZv/ABFRPjmq+q2dunprTYrPWCBodK2WH2QD7yo/vtbVZHf/AIkbjVpp7k+bsQaAcAMnv3RMrjNc1zQ5rgQe4g7r6qkVF51R0mqIKGqvD4XOHG2lfL2o4epb4Bby7VPWKLGGZdPbbRHbHtDmzPbtxb8hsN+9Fyn5FX3FdWtYMz9ZNgtNrnFIAZSWcPDvvt3nyK6VLrnqfXX1mOUdFapq183YNayMlrneR3QyseirxlOserGH1DKO+0NohqJW8TY2sLnAdSAeSk3SfUiHUGyGWoEcVzpTw1MLeQ8nAdChnLekREUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEXTud3tlmpnVd1r4KWJo3LpXhv/wDVEOY+kjZrf2lHilGa+YchPJ7MQ8wO8oZwmSqq6WhgdU1lRHDEwbufI4NA/Gory/0iMWsnaUtgjddapvIOb7MQP4Xj9Cr/AJRnuVZhMZL5dpZWE7iFp4Y2+5oWvK4Zzlt+W6qZlmJdHcro+KlJ5U8HsM289u9agTvzKIqgiIqCIiAvrXOa4OadiDuD5r4iDKfVTkf/AByu6fZ3f4p9VOSf8drvy7v8Vi1kbFeBZK+OtdQU1YxpHHDUM4mvHiPJB8qcgvlZA6nqrtVyxP8AnMfK4tPvBWPU03286XZPpzcK2x2Kjtl5gDC6DbZ4O/MsPiFCykTkfWucxwe1xDgdwQeakuHNbvqY2zYjkV5gt1roWg1lQ9/D2wb3F3U7ch5qM13bKyCS70UVUxr4XzsbI13IFpcAQUG7V2QNxvK79ZMFrIIqO6cFHHVB+wZEANyHefPmshldNiWGY9YHY7eKO63anrTVVksb+IucANh+CDupoi0R01lhY/4gbs9odykPiF+xobpqO6wD8o5ZXCG6AWXI7RfM7zfIaSa9VVPI2honSc4ztyPD+gLE4hW/Vn8VYxkd/gtmPWf5SRsknB2xJ3I8yfzBTz9Y3TX/AIAPyjl9Oh2mp77APyjkMSgKpyT4lyLIcfw+ogp6O8zNpo6lr9mxwg94Ph71ksobimB0WNz4rdaO7XGiqXVNXMx2/HJty/mhTX9Y7TXbb4gH5QoNDtNR3WAflHIYlDVLTWC749fc4y/IaWpyC4QvNJSGTnF05e7uHgsfhtSzNn2qyZdfqe3Y7YmD5J8nD2x3328yevgFmNa9MbBh9da7laY5Ke31svYzsHtCMjxG/ktjk9G7GY7abo7KK4QNg7ffsm7cPDuqmEdSZDJRXm/4vi1ZBR0V7q2R+tCThayBu/j4A781lcpqcW0+mxaow64Ud1rLcZJ6mdjt+0lPdv5dAslolpZYcuNwvN7jkno6aUwQRb7B5+6JHQfpUsDQ7TUd1gH5RyLiUKmisNbiF+zHKcipK3JLjFxUtP2u7od3Dw67dw8Aurbrjb9P3Y9m+L3aKeSaMR3OhEntNPiCOhH51Of1jdNd9/iAflHJ9Y3TX/gA/KOUMS26wXuhyOz0t8tsnHTVbONh+nYj3ggj6FkF0bNZ7dj9sgs9ppxBSUwIjjHhuST+ckrvI0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/MjxFG6RwOzAXHbyVf8z9JKsbPNb8TtghEZdGaipG7twduTe78asCRvyKiTVjRCjylst9xtjKa6Nbu+EDaOo/wd5ok58FdL7k9/wAkqTVXu6T1bydwHvJaPcO4LFrs3C3V1qrJaC40slPUQu4XxvGxBXWW2YEREBERAREQEREBERAREQASO5ERB+jG8AEsdse47d657eD6/TeyT8swf/sFtOAahzYfOaetttNcbdNykhlia5zfNriNwVKfo601quvx9UTUVPKDVCSISRtLmNJJG3RTJym6g/aNN/7LP0BdhfAABsBsAvqy2IiICIiCO9eLL8cae1j2Rl0tE5tQ3yAPP8ywM+ZE+j+Lr2hM76T1InfmH/N/QpTvtvbdrNW214BFTA+PY93MKprbzO/FGaaNY4zG8k8Plvtt+NGZ2WE0QtDbRp1bRw7Oq+Kpf73H/ALfV07RRR2210lBE3hbBCyMD3BdxGhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQcVTU09HC+oqp2QxMG7nvcGgD3lRfmHpCYlYC+lsvFdapp2PZ8o2/wA7x+hbpnWIU+cY7PYaiqlp+0IeySM9zh3bjxHUKomY4TfcHujrbeqYt33MUrebJW9QUZmZhNM8WFa/2l81GI7Zk9NH3O73AeB+6b594UFZFjl2xa6zWe80roZ4TtzHJw8HA+IXXtd1uFlrorla6uSnqYHcTJGHYg/4Kd7HlOJ632ZuMZgyOhvsY+QqW7AyO6tP6Wq8Jyr6i2TOMDvuCXR9BdoHGIuPYVLR7EreoPXyWtqgiIqCIiAiIgIiICIiAiAb8gt/xHRjKsot8l2mEVromsLmTVfsB58Nh081M4GjUtHV10nY0VNLPJsTwxsLjt15KafRsxptVdKy/vr6iJ9Aey9XYdmSbj7brsu/orlOI2UVOI3CkoaS8AvjbWscHMqdt9hxeB/Ssn6OoInyff8A/NP6SpnKxympERRoREQEWCyHNsXxeKSW9XingdENzHx7yHps3vUT3XXS/ZTWm0af0ENMx27TW1rw0Dz58h9KJlL2R5PZsXt8tddq+CDgY5zGveAXkDuAVPmZZw503L5KOIgV3rRhaPZI4u5TLZtM8crq0XnUjO6e8VpcHuhFUOyB6E78/o2WyR4FonFcW3GP4tD2O4hH6yOz3/B3RJ3brjWYY9llGyrslzhn4mhzo2u9tnkW94WaUI5Hpph5rXXrAs0pbHcN+NrG1IERP4+S4LVrbfsOrBZNQqaKuaNgyuopA/cdTtyci5Tqiw+PZbjuU07aix3WCpDm8RY13tt97e8LMIoiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLBZfjGO5TaZKDI4IXQ7EtleQ0xO+6a49xXBqBf71jOMVN3sFpNwqodvkxueFvi8gd+yqblGomX5dK43q7zOi33EDDwRt/mhEmXd1C00u+C1vGT63bJ+dPWRjdjh0O3cVqEUssErJ4JHMkY4Oa5p2II8Qt/wHVGSyU78ZyuF10x6qBjkhf7Tod/tmb/AKF+890uba6NuV4bUm6Y9UN4xKw8T4PJ/wDirllt+Eam2HPLSMH1QbHI92zaatfy3PhufB3mtF1K0rvGBVRqWg1VpmcewqWc9h4B3QrRe7mDzUt6b6yCkpW4hncYr7NOOxbLKOJ0LTy2O/e39CcHxRIilTU3Rt9hgGTYg91xskw7Q8HtmEHnvuO9vmorVBERUEREBEXLTU1RWzspqWF80sh4WsY0kkoOJZzF8MyPMawUVht0k532fIRtGwdXO8FIuM6JUlroRkuptyjtlCwB/q3HtI/yPT3d648n1vjoaJ2O6aWyO0W9oLPWAzaV46jp7+9ZyY82ZpsX030fpm3DLaqO9X4N4o6RmxYx3hy8PefxKPs51XybN5XQzTmjtwPydHCdmADr1WnVFTUVcz6iqmfLLIeJz3u3JPvKymNYlfsur22+x2+Sd5PtOA2YwdSe4JjAxDXOa4OYSHDuIPPdT56ME9xMl4i9XaaQ8L3zE+12nRatpxaMYxbL6mxaj2sw17AW0kk5+RDtuW/XfwK330dNu1yYN22Fadtu7bc9ySscpqREUaEREEYZvoZa81yGe/1N5qIHzNa0xtaCBsNlgh6MdlbybkdWN+/ZgU2IiYhCf+jHZv3x1n9AJ/ox2b98dZ/QCmxEMQhP/Rjs3746z+gEPox2Vw2dkdWQOrApsRDEI8070ft+nt0nudJdJ6l08PZFj27Ac991IaIiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD4QHAggEHlzUH6t6FMuRkyHC6ZkVRzfUUY5CXzZ0PkpxRDlQeaGamlfBUROjkjPC9rhsWnoQtswDUa64PVuiDRV2up9mqopObHtPftv3HZT7qrozbc0hku9oaykvDGHm0bMqNvB3n5qr10tNxsldLbbrSSU1TCdnxyDYj/ELXLE7JKzLTuz5Ba353pk/1igI4qu3gfK0zvHZvTyUVuaWkhwII5EHwWdw/Nb7hFzbcrLUlu+wlhdzjlb0cFI94xXG9XLdNlOCNbR31jeOttRIAe7xcz3qcDX9L9XK/CZfiu6NdW2Sb2ZIHczFv3lu/5wtm1B0ltl8tpzrTOSOoopGGWakjO5HUtHh5tUM1NPUUk8lLVQvimicWvY8bFpHgQto0+1Iven9yE9E8zUcpHrFK4+y8dR0Pmg1NzXMcWvaQ4ciCOYK+KfMpwPGtW7S/NdPpWQ3EN3qaI7N4n+II8HefcVBVbRVduqpKKup3wTwu4Xxvbs5pVicjgRZKw47esmrmW+yW+WqmedtmN5N8ye4KX6HTzA9LKWO9ajXCO4XLh44rbFzHF3jl4/TyTI0TCNJsozV7KiGn9TtwPt1c44WgeOw8VIFTlGnOjcBt+JU0V7vuxbLVvO7Y3e/3+AWm51rPkOVMfa7Zta7SPZZTweyS0d3ER+gclHhJJJJ3JUxkZnJ8vyDL651ffbhJO4ndrN9mMHRrfBYiGGaokbBTxPkkedmsY3ck+QC2/BdLMozqdrqKmNPRAjtKuYbMA8up9ynCismmOh1uFbcp46m6FvJzwHzSHoxv2oTOCIaFp/6PlzuvZ3XMnut9EBx+rg7SvHmftQtzyXVfBtMKB2OYVQQVNXENuGL7G13V7vtiox1A1xyXMO0oKAm22127TFG725B9879QUbc3HYAkk/SSmMmfJs2V6g37NS03/wBWlkjdvFK2MNdGCfm7jvCmD0X/ANoXnx+VZz68lC9px2OO7UVPl/rVooatvGJ3wnct8CAVNvo1RxQx5BFTv44mVIbG7q0b7FCOU3oiKNiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIuGSspIZmU8tTEyWT5jHPAc73DxQcy0nUfS6y5/QOMsbYLnEzaCqA5g9HdQt2RBRzKcUvWHXWS0XukMUrPmu72yN+6afELq2a9XPH7jDdbTVvp6mBwcx7T+Y9Qrm5lhNjzi1Ptd5pwT3xTNA7SJ3Vp/Uqo6g6cXvALo+nrIXy0T3f6vVtb7Dx0PQ+S1liYw317cZ1zoGmIU1ozGFoLgfZjrAP1/nUR3qy3PHrjLa7vSSU1TC4tc142+kdR5rrU1TUUdRHVUkz4poncTHsOzmnyKmCy5VjurtvixXPHso73E3hoboNh2jvBr1ODlGmKZde8Nusd1slW6J7T7ce/sSN+5cPEKbzJpfrVbBe7xM2zXShaH1pa4NcWjv5n5zfPvUJZdh18wq6Ptd6pXRu3JikHNkrfumlYUOe0ENcQHDYgHvCuMkJmvmsNgxGhdjmlNsigYBwvr3s3c89RvzPvKiG43K4XerfX3OslqZ5Du6SRxJK6zWue4Ma0ucTsAOZKlbTzQW+5MWXLIg+2W7k4NcPlZR5Dw95Tg3lG1nsd2yCuZb7PQy1U8h2DI277eZ6BTtheg1mx2AZBqJW07uzHH6uX8MTPH2j9sfJZq85vpxo3QOs+N0UNTcWjhdHEQXE9ZH/AKlBOa6jZPnVT2t4rCIGkmOmj5Rs+jx95U5XaErZx6QVFbYH2LT2kja2McAqywBjfwG/rKgu5XO4XerfXXOslqZ5Du6SR25K4qWlqa2dlLRwSTTSHZjGNJcT5AKbdPfR2qq0R3XNnup4Ts5tGw+24ffHw/SrwmJlFGMYbkOXVRpbJQPlDGl0kpG0bAO8l3cuK0dtbL0wiqipuymMRqZIu0Ywg9+xV0Kay2qw2WW3WehipaeOFwDI27eB5nqVCGjmH2TNLFlFpvdMHsNeDHIOT43bO5tKmVw57zpZqPm9qgmuOa2u40bW9rBI2PkG7eBA5Bd30Z4XU0F+pnkF0NQIyR4kbhYegu+UaFXh+PX5sldjdYXCnmHczfxafA9WrOejhJHM7I5oXcUclXxMPUEnYoRymxERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBEOt2pOYYY+Ohsdt7GmqIx/6i5vEA877tHgD3d/VV1rsmyC5XAXSuu9VLVNdxNlMp3afLors3qyWvIbdLarxRsqaWYbOY8fnHQqrWqekF0waqkuNvY+qs0j/YkA3dFv9q//ABVhmrzSPpJrpBdWwY3mE4jreTIKx3Js3QO6O8/FTYCCNwdwVQYEtIc0kEHcEKbdI9c5LV2ON5jO6Sk5Mgq3c3RdA7qPPwSYInzWNXQvdjtWR26W1XijZU00w2cxw/OOhXbgnhqYWVFPI2SKRocx7TuHA9xBXIo0qTqnpBdMDndcaPiqrPI/ZkoHtRb9zX/4qO2lzXBzSQQdwQeYKvpV0lLXU76SsgZNDIOF7Ht3aR7lW7VvQ+ox90mQYnBJPb3EvmpwN3QeY6t/QrEszGHSxHUayZJao8I1Pj9YpfmUdxP2SmPcNz37ea46v0esxddGw2eSlrbbMQ6KuEoDSw+JCizbbkt/wvWbKsMtVRaKaRtVC5m1MJjuKd3UeXkmE+KXbJgGnWj1vbe8qrYamvA3D5QDz6RsUeaha+XzJO0tmNh9stxBaXg/LSDzP2o9yje+5Deckrn3G918tVO/7Z7twPIDwX6sGN3vKK5lusdvlqpnd/AOTR1J7gFcGfJjnvfK8vke5znHcuJ3JK3bAtI8ozqRs0MJo7fv7VVM0gH8EfbKXtPvR6tNnEV0y5za+sGzxTj7DGeh+6P5lMUUMVPE2GCNscbBs1rRsAPIKTK4zy1LBtL8YwWnb6hSNnrdvlKuUbvJ8ug9y3BEUacNYxz6SdjG7udG4AdTsqaSRZPjt0nbVTXKz0c9YWTSMDmgHc8+Xedt1ca5XS32ejkr7pWRU0EQ3dJI7YBV51Y1vt2R0s+OY/bIaijkG0lVUM9onqweHvRmpl4dFxl1mjuMGpVVc7e9vaRl4LgCB0J5Fdv0aoPVY8gpQ7iENSIw7rtuN1FOmuplzwKuezd1Ra6kFtRTF3LmPnN6FSx6NszKkZFUxb8EtVxt379iSQqRym1ERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBoea6y4hhcklHNUmsr4+RpoOZa7o49wUY0vpKT1t2fBfsfp32Wcdm+JvtPa0+J37/cs/rFokb4+fKcVZtXO3kqqYn7N5t++8lXKWKWCV8E8bo5GHhc1w2II8CFYjLM5SzqBpHRy20Ztp3Ka+1VG8slPH7ToAefLx2HTwUSEEEgjYhbdp7qTesBuAkpnmeglP8ArFI8+y8eJHQqQcv07sGotqOb6YGPtSC+roPmu4u87N8HeXimcJ8GvaVaz3HC5o7VeXy1dncduHfd8Hm3y8lZ+z3i2363xXS01cdTTTN4mPYd/o8iqKTRS08r4Z43RyMPC5rhsQehW3adal3rT+5CWleZqCVw9YpXH2XDq3oUmFicLlL8ua17SxwBDhsQRyIWHxTLrHmVrZdbHVtljd89hPtxu+5cPArNKNIJ1Y0GbVGXIcKgayX2pKiiB2DvElnn5Kv5pagVBpDBJ23FwGPhPFxdNlfZYb6jsY+OjkXxJSm4Ebdvwc/f0381YnCYV80/9H2838R3LKHPttEdnCHb5aQe77UKwuOYrYsToW2+x2+OmjHeQPaeepPeVl0UIjAiLA5Xm2OYZRGtvtwZFyPBEDvJIegais6SGglxAA7yo01A1yxvD+Ogtrm3S4jcGON3sRn7536gof1B11yHLTLbrQXWy2uO3Cx3ysg++d4b9AoxJLjudySfxqxDOWxZhn2S5tVmovde98YcTHA07RxjoAteDHuBLWkho3JA7lIGAaM5PmskdXNC6gthO7qiVuxcPvB4qQ6ODSrSE3Gx3m6NvL7k9rHxtpw98Ee22ziD/wDNkzhN/FrWl2i1py6yyZBd7018PC4Np6Vw42OA+3Ph7ltvo2Qspm5FTRklkVV2bd+/YEgLTaytotLr3Hk2n2QwXGy144ZqIybuaCPmuH6D3rcvRrnFUzIapreET1QkA6A7nZFjlNyIijQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIuvcK2G2UFTcqgOMVLC+eThG54WtJOw67BB2FGGqei9szWN92tAZR3djTzDdmT9A7z81oWZeknc6vtaLEqEUkR9kVM3OT3gdwWK0615vthuHquVVMlxt07/bkfzkh3+2b1HkjMzHCMbtaLlYq+W2XWkkpqmE7PjeNj7/ADCyOI5nfMKujLpZaosII7SI/Mlb9y4Kz2Z4NiurePx3KgnhdUuj4qSui57feu27x5HuVXcrxO9YbdpLRe6Yxyt5seObJG9WnxWs5ZmMJhudjxPXS1SX3GeC25LTR71FKdgJj59fJ341CF0tVwstdLbbpSSU1TC7hfHINiF+7Le7pj1xiutorJKaphO7XsP5j1Cm+kuWI682gW27tgtuWQR7QzDkJdunUHxHf0U4XlEGHZpfMIurLpZqjhO+0sTubJW9HBWu091JsmoFtE9HI2GtjA7ekcfaYeo6jzVTMqxO9YddpLRe6UxSt5tcObZG/dNPiF1bLe7pjtyhutoq301TA7ia5p/MeoVxkicL2Io50v1htOd07LfXOjo7wxo44idmzebP8FIyy2Lhq6yload9VWVEcEMY3fI9wDQPetLzvV7FcIa+nlqRWXAD2aWE7kH749w/Sq2ZvqdlGdVBNyrDFSAns6WI8MbR59fpRJnCW9QPSLpaN0tswqJtTKBwmtePYafvR4qA7verpfq6S5XetlqqiU7ue87/AIugXVhhmqJWwQRukkeeFrGjck+QUv4HoBcLhE285rL8W0DBxmEkCRzfvj9qFrhmd0a41iV+y2vZb7Fb5Kh7jsXgbMYOrndwU52LSrBNMaBuQagXGnq6tg4mxP8AmNd0a3veV+cl1jw/AKB2O6dW+nmnjBYZmt+SYe7cnveVBOQZLe8or3XG+XCWqmd3Fx5NHQDuAU5NoSTn2v8Ad74yS04pG612/bh7QcpXt+j5o9yiWSR8r3Syvc97ju5zjuSeq5qOgqq5zvV4nFrOb37eywdSfBSLpDa9ODUVVyzm5QiSllDKenkJ7OQbHdx271eDeWM0s0/ueY3N1UylhfbaT9tuldy227gO/dSr6OEUcDskhhaWxx1nCwHwaCdgtJyC42jT3JPqq00yWnqqOqcRUUAJ2aD3gg97enRbL6OmR2llXdqSrrIoKy51PaQQE83d5Oyiwn1ERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBflzWvaWPaHNcNiCNwR0X6RBBurmhcVayoybD4OGp+yT0TAOF/Us6HyVeZYZaeV8E8bo5GEtcxw2IPQhX4UWaq6K2/MmPvFjbHR3cc3HuZUeTuh81YnCTCCtOdTr3p/Xh0Ejqi3SuHb0rj7J829CrIT02Ea0YsHgxzse3ZsgA7amf06g/mKqPdLXX2avmtlzpnwVMDix7HjYgrKYbmt8we6sulmqC3wlhd8yVvQj9aYZiccu/qFpvfMAuboKyJ0tC93+r1bW+w8dD0PktWpqqooqhlVSTPhmidxMex2zmnqCrc43lOH6yY3JQ1UEb3uaBVUch9uN33TfLoQoI1S0dumCzPuVBxVdne/ZkoG7ot/B/+KRJjDa8Wz3HdU7Y3C9SGxxV2wbSXEbNcXeG58HfmKjrUHTi9YFc3QVcTpqF5/1era32HjwG/gfJamCQQ5pIIO4IUv4Dqtb7lbBgmpMTay2TARw1cnN0XTiPfsOveE4ESU1TUUc8dVSTPimicHMew7OaR4gqRLnr3nNwx+GyNqWU8rWlk1ZH9llH6j5hdfUvSe44W/41tr/XrHUHeCpZ7RYDzAdt+ladZbDdsiro7bZqCWqqJDsGsbvt5k+AV5N3SlllnkdNNI6R7zu5zjuSepK3HBNKMozqdr6SmNNQ7+3VzAhg933X0KTcW0SxvDqAZLqXcYHGIB/q5dtGw9+x8XHyCxOdekFLNA6x4DTCgpGjgFTwBri37xvc0KZMebamU2leh1F2tQ9lyvYbyHJ8xd5DuYPeojzvV7Ks5c6nmqPU6DflTQOIB/CPef0LS6mpqKyd9TVTySyyHic97i5zj5lbHhWnOTZ1VCK0UZbTtPylTICI2D3+J8gmMDWWRvle2ONpe5x2DQNySpZ080AveRiO55KX2yhJBEZHy0g932o96lvBNG8VwSNtwqwyur2N3fUzgcMfXhB5D3rC6hekFZrA6S24s1lyrmnhdKfsMZ9/2xSZXHm2S7Y5plhmH1FnusFLR22WPaXiPyspHjv3ucqnXz4mF1qBYHVBoOM9iZwA/h89lzZDlF9yqtdcL7cJamUklocfZZ5NHcFilYhORZjEsgfi2QUl+jpmzupHcYjcdgVh0QXE0p1Aq9Q7PVXSqt8dIYJzE1rHFwI2335rd1R+x5rlON0z6Ox3mejhkdxuZGRsXdeasjoFld0yfFqk3qukqqqnqnN7R/fwEDYfpWVicpPRERoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBpOpGl1l1AoT2rG01xiB7GqY0b7/cu6hVRybF71iN0ktV6pHwysJ4XEezIPumnxCvItdzXBbFnVtNvvNOC5oJhmbyfE7bvB/UiTGVNbJfbrjlxiutmrJKapiO7XsPeOh6hWi021VsWo9u+JrwyCK5lnBNTSbFk425lu/f7lXjPtO77p/cvVLnH2lNKSaepYPYkb+o+S1qlq6mhqY6ujnfDNC4PY9h2c0jxBWuUjZMGreh1RYXyZBiUElRQOcXTUzRu6Dx3HVv6FDfdyIVltJ9cKXI2xY7lsscNwI4I6h2wZUeR6O/SsdqzoSysEuR4VA1s3OSejbyD/EuZ5+SkSY8mh6Z6u1OLt+p7JI/jGwz+w6KQcRhB8W7948lIt71S0403t7qPALbS1NbUt7QGEew3fxe7vP4KrlLFJDI6KVjmPYS1zXDYg9CvyBudgNyVcGWdyrNcjzKtdW324STc/YiB2jYOgb3LGW22XC71bKG2UctTPIdmxxtJJW/4Bohk2YiOvrWm221x37WVvtvH3rf1qwVkxbBtLLO+pjbBSMjbvNVzkdo/6f1BTOEiM8o10+9HONgiumcScTt+JtDGeX8936gpHyjOcL0xtrKWUxROY35GhpgOM9OQ7h5lRbqB6Rk1Q2W2YRG6Fh9k10g2efwW+HvUIVtdWXGpkrK6plnnkJL5JHcTifeUwuYjhu2e6x5Rm0klMJ3UNtJ9mmidtuPvj4laEtkw7T7Js3qxT2WhcYgfbqJBwxMHmVYfENAcNsVFtfKZl3q3gcb5h7DfwW+CZwbyqoiuV9aDTb96VD/QKfWg02/elQ/0CmTCmqK5X1oNNv3pUP8AQKfWg02/elQ/0CmTCmqnb0XrpwVt5tL3/PjjmYN+hIOw/EpU+tBpt+9Kh/oFZOw4LieMVD6uw2Omo5pG8Dnxt2JHRJnK4Z5ERRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBjb9YLTkttltN5o2VFPMNiHDm09QfAqreqGkN2wSqfW0LJKuzvO7Zw3nF96/p71bZcFZR0twpZaKtgZNBO0skjeNw5p7wUSYyoY1zmkOaSCOYIPcVOWkWuj6Iw43mlSX052ZT1ruZZ0a/y81jtWtD6jG+1yDFY3z2we1LTjm+DzHVv6FDpG3IrXKcLU6maM2jO4xerBJBSXJzQe0b9iqB4F23j5r5p9oTj2JtjuN94LlcW+1u8fJRHyB7/eVFOlmtlwwsttF8MlZaD83nvJB+Dv3jyXHqDrrkWW9rbrSXWy2uJHDG75SRv3zv1BZMxyl7UDXHG8Pa+22fguVxbu3s4nfJxH74j9AVcsszjI80rDV3y4PkAJ4Im8o2DoAsCSSdzuSSpE0/0VybNHsrKqJ1utp5meVvtPH3rfFXGEnMtCobfXXSqjobfSyVE8pDWRxt3JKnXTv0dj7F1zp23c5lFGf+s/qUr4bp3jGD0wis9C0zkbPqZBvI/6fD3BbOkysUurbrbQWmkjobZSRU1PGNmRxt2AC7SIo0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/L2NkaWPaHNcNiCNwQoI1e0MM5qMnw2D5Q+3PQsGwPVzPPyU8ohMZUGkjkhe6KVjmPYSHNcNiD0IWWxnEb/l1c232K3yTvJ9pwGzGDq53cFZnN9DsezG9QXqOdtveHcVUyODiFT7zxDhPnsVvFix6z43QMt1loIqaFg22Y3Yu8ye8q5ZwjnT3QOxYyI7jkXBc7gNnBrh8lEfIeP0qVmtaxoYxoa0DYADYAL9Io1wIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg6F+unxJY7jeuw7b1Ckmquy4uHj4GF3Dvsdt9tt9iqNfspn8Rf9p/8AKK+iLt22toaUT67T7/zmMfJ0by3utaY+z63q8c+zFWfnwoX+ymfxF/2n/wAon7KZ/EX/AGn/AMoqb6u/72M1/lFcv+5kVt/guv8AaDUH/k7f/wBcy+mubCxtrebj1WcY27p8ce98VZdV6neXkWvrsZmYz20zxnwx7vNMHo6+m/8AX+1FbgH1sPiLioZ6z1v469a+x8Ps8HYM7+Lv4vDuU0636rW/RTTK8aj3C3/GAtgibDRCcQmplkkbG1gfwu25u3J4TsATtyW+KlPwjuT1t2jwLRWyPLq3ILkK2WIeJBEFODtzIc+WT6WDv5beBoaeje3dNGnR20+MZmeN53fVXOrcdNsK69XU76/CcRG87RtG20sD+ymfxF/2n/yiu5h+S0GZ4pZsutbgaO9UEFfBz32ZLGHgHu5gO2PILxBySx1mL5FdMZuI2q7TWz0M4222kieWO5e9pXqB8H7nYy/0faKy1FT2lZi1bPa5ARs4RE9rEfdwycI/AXp9Y6boW+hGtb04333mdp+P+bvG9H+sXV3c1W93VnbbaI3jniI/yEhekfrj/o+6ex559S/x/wAdxhoPVPXfVdu0a93Hx9m/u4O7h8e9Vf8A2Uz+Iv8AtP8A5RSb8I/+56g/lFR/3cy8vlvpHTra6t/WatOZzPjP7S4uv9XvbG79VoV4pxHhE/WHo7kXp66o4hbjd8t9EPKbJQB7YzVXGvqKaEOPc3jkoQ3c9N139P8A4SXSjJK6ntua4xd8VfUFrDVdo2spInEke29obIG93MRnvO+225tNlVjtOTY3dMev8EU1uuNHLTVTJWhzTG5pDtweXIHf6F4WrHTrWz6lRVE6fbMY4mfH4/BydXvuodH1KJjV74qztNMRxjyx5vcLM82o8X04vuo9uZDd6W02SpvcDIagCOsjigdM0NlAcA14aNngOGx32Kpj+ymfxF/2n/yi2vQK73a6/B6Zc26SySNoceySjpXvduewbTzFoB6Auc0dA0DwXnE5j2BrnNcA8cTSRtuNyNx15gj6Ct9N6Xb6lWrRrR3TTVjmY+ksdZ63d6VOjqW1XbFdOZjET9Yeyvo6a5UHpBadtzqksos80dbNQVVB636z2EjOFw+U4Gb7sex3zRtxbc9t1mdaNUKHRrTO+aj3Cg9eZaImOjpBN2RqJXyNjZGH8LuHdzxueE7Dc7HZUt+DHz0UmTZbprVT7MuNJFd6RhOwEkLuzlA6lzZIz7oz0K3b4S/N5qfEcS0wtrnPqb7cH3CeKPfidHCOCNhHiHSTbgdYl0NTp1MdSi2iPZmc/lz/ANPU0urVVdHm8mfbiMf1ZxG3ylr/AOymfxF/2n/yitJp/rZ9XOgTdcfqZ9S4rXX3L4r9d7T9rOmbwdt2bfndj38HLi7jtz8Z16k6AfuBYv5L37+8q13+rdOtrbToq0qcTNURzPG/nLy+hdXvb3W1KNevMRRMxtEb5jyhFX7KZ/EX/af/ACitloLqz9e/S606k/EHxL8aPqWepetes9n2U74t+04Gb78G/wA0bb7c+9eLK9ZvQL/cuYn/AO9cf++nWes9PtrW3ivRpxOccz5T5y16O9WvL+6q07ivMRTM8RG+Y8ohI2t+q1v0U0yvGo9wt/xgLYImw0QnEJqZZJGxtYH8LtubtyeE7AE7clUf9lM/iL/tP/lFnvhHcnrbtHgWitkeXVuQXIVssQ8SCIKcHbmQ58sn0sHfy28/8ksdZi+RXTGbiNqu01s9DONttpInljuXvaVvpPTLbXt4r16czOZjeY248J82Ou9avLa6nTtqsU04idonfnxifB7fYfktBmeKWbLrW4GjvVBBXwc99mSxh4B7uYDtjyCzCrT8H7nYy/0faKy1FT2lZi1bPa5ARs4RE9rEfdwycI/AVll87daM2+tVpeUvrbK4i6t6NaPxRE/3/UREXA7QiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPEPV3/exmv8AKK5f9zIrb/Bdf7Qag/8AJ2//AK5lUjV3/exmv8orl/3Mitv8F1/tBqD/AMnb/wDrmX3XU/8AbqvhH1h+YdF/3ej41fSXoKqHWmQ66fCJ1Nwa41Fo0/a5rHN9prfU28A5937blc4f/Crl6lZlS6eaf5FnFXwllkttRWhru6R7GEsZ73O4W+8rzb9EP0l9NtCazLMh1CteTXS+ZHLEGz26ngla2Jpe+TiMk0Z4nPeCdgfmhfPdM0NSrR1tXTjM47Y/Pn5Q+t61c6VNxoaGtVinPdP9PHzlgvTqwd2Fekbf5mRcFLkUcN7p9htv2reGU/lo5T9IUk/Bn538U6j5Hp/U1BbDkFubW07DzBqKZ3cOhMcsh6bM9y0b0yfSF0x9IWuxm9YRZ8ioa+0RVNLWG6U0EbZYXljow0xzPO7XCTvA+eow9H3O/raa1Yfmb5hFT0N0ijq3k7BtLLvFOfycj19D6nUuOm+q1YxV24/OOPpD5L7TpWvWPX6NWaO7OY8quflmV/8A4R/9z1B/KKj/ALuZeXy9QfhH/wBz1B/KKj/u5l5fLj6B/CfnLm9Kv4/+mP3X41o9NDXc6d3WgPo1ZJgYuERo33u6CqfHAyQFruDjpomiQg+y4uOx57FVM0WwTTbOsmp7fqXqtR4bb3ScJdJSyySTAbHYScPYxb7kB73bDhO4+aHezVwoKG60FRbLnSQ1VJVxOgngmYHsljcNnNc08iCCQQvE3VvGKLC9U8vxG2gijs19rqGmBJJEMc72sBJ578IC6/RtfT16K9LSp9XPOY3+uXb9IbbWtdTT19ev1scYmMf+uOXq7n+KYtg/oqZfimFQxx2O34PdWUXZydoHxmjld2nGPnF5cXl3iXE+K8z8nwMO9GvCdTaaEbx3652Ksk25kENmpx9G1R+NWB9E/US+ZB6Kmt+n12qpKilxjGK6otznuLjFFU0dVxxDo0Pi4gOsjvJdzSXAnah/B4ZXaKeAy1lDcK27Uga3id2lMY5SGjxLmNez+euO27unVVRXOcVxmfOJid/1y5bzs6vTRVp04zpVTEeU0zG0fLCtPox579bbXfDsolmMdK24soqw+Ap6gGGQkeIAk4ve0KyWorjrb6b96gdxzWrTqyVZ27w11JTvdv0BFXMPP2fxUdBLSCCQQdwQr2+gfitbXad6t6uXmWSorLxBUW1lRL8+R7YXz1DyfHidLFz6tP0eh1KinRzdfix2/OY/7eT0bUruJpsfw93fP5RO357KIr1J0A/cCxfyXv395Vry2XqToB+4Fi/kvfv7yrXF13/w6f8Ayj6S5vRj+I1f+E/WHlsvWb0C/wBy5if/AL1x/wC+nXkyvUD0VsypdPPQdps4q+EssdHea0Ncfsj2VVQWM97ncLfpU6/TNdtTTTzNUfSWvRWuNO8rqq4iifrCNrTIddPhE6m4Ncai0aftc1jm+01vqbeAc+79tyucP/hUE+nVg7sK9I2/zMi4KXIo4b3T7DbftW8Mp/LRyn6Qs76IfpL6baE1mWZDqFa8mul8yOWINnt1PBK1sTS98nEZJozxOe8E7A/NC6Xpk+kLpj6QtdjN6wiz5FQ19oiqaWsN0poI2ywvLHRhpjmed2uEneB89XQ0tfQvaaYpn1cU9ufDzz8y617a56bVXVXHraq5rx47zjHy3bz8GfnfxTqPken9TUFsOQW5tbTsPMGopndw6ExyyHpsz3L0eXiz6Pud/W01qw/M3zCKnobpFHVvJ2DaWXeKc/k5Hr2mXj+kGh6u5jUj8UfrG39nv+ilz62znSnmif0nf65ERF4T6gREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHiHq7/AL2M1/lFcv8AuZFbf4Lr/aDUH/k7f/1zK5lXoZoncKuevr9HsIqampkdNNPNj1I+SWRx3c9zjHu5xJJJPMkrL4tp3gGDyVE2FYNj1gfWNa2oda7ZDSGYN3LQ8xtHEBudt+7cr6C76zp3FrOhFMxMxH6YfJWPo7q2l7F1NcTETM4+MT/dXH4RzPvqa0Vo8Nppyypy25Mie0O2JpafaWQ9T8p2AP4X0Hc9AvRp0rsejWI0WYaW4pdb3JbI6qvqrjZqapqDNNvK5jpHsLncBk4Bz5BoA5KXco0+wHN5KabNMHsF/fRhwpnXS2Q1RhDtuLgMjTw78Ld9u/YdFnwA0AAAAcgAvMm8mm2p0NPMTEzMz5+X6Pajp/deV3WriYmIiIxxHM/qrh6T/o4aX1+hOXTYZpfjFpvVuojcqSqtdnp6acdg4SPaHRsBIdG17dt+e/XZeU69454IKuCSlqoY5oZmGOSORoc17SNi0g8iCNxstH+sBoP/AAJ4F/Vuj/8AGu/07rH2PTmjViat88vL6v6Pf6hq06mjMU4jE7f2VN9JLOxqR6BmD5bJUNmqaiut0FY4HvqYYp4piem743H6R71QZe379LNMn44zD36c4w6wxz+sstZtFOaNs3P5QQ8HAHcz7W2/MrF/WA0H/gTwL+rdH/41zWfWdK0oqoiicTMzHwlwdQ9Hde/1KdSdSMxTETzzHiizJ/hAPRtsllqLhY8qrMhro2nsbfS2uqhfK7Y7AvnjYxrd9gTuSN9wD3LzCya+3fPszumSVUDprnkVymrHwwtLi6eeUu4GNHM+07YD3BeyH1gNB/4E8C/q3R/+NZrG9OtPsNeZMQwTHrG8uLi622uCmJJGxPybRz25e5cVp1K1sIqnRomZnzmP2hz9Q6Pe9UmmLjVpimP5Yn95/dUPQjQjJdIPRK1dv+a259uveV4zcpPUpW7TU1LDQz9kJB9q9zpJCW94HDvz3A334PGGKo9G4U88TZIpbzXMexw3DmkMBBHQhWZuFvoLtQVNqutDBW0VbC+nqaaoibJFNE9pa9j2OBDmuaSCCNiCV08cxbGcPtos+JY5a7JQB7pRS26jjpoeN3e7gjAbudhudvBdPW6hNxp101x7VVUT8oxh6Ft0qm11dOrTn2aKZp985nOXizq1hMum+pmT4NKCBZrnPTQknfihDiYnfSwtP0r1A0HwV2nvoi2+y1FN2NXU45V3OrB+cZamN82zvNrXtb/NCky+6P6S5PdZ77kuluI3a5VXD29ZXWSmqJ5eFoa3ikewuds1rQNzyAA8FtDqKjfRm3PpIXUrouxMBjBjMe23Bw93Dty2222XYvurfbNKjTxjG8++XT6Z0H/T9fU1e7MVRMR7omf/AI8Hl6k6AfuBYv5L37+8q1MX1gNB/wCBPAv6t0f/AI1tFvxbGLTYPqUtWOWuisgikg+LaejjjpezkJL2dk0BnC7iduNtjxHfvXL1Dq9F5RTTTTMYmJ+rh6T6P6vTtSuuquJ7qZj54/s8LFbbKc/+pr4PPCMMppuCpy28V0T2h2xNLT100sh8/lOwH876DfX6wGg/8CeBf1bo/wDxruVOjmkVbb6G0VmleHz0Nr7T1GllsdK6Gl7R3FJ2TCzhZxO9p3CBueZXPr9c0deaM0T7M5+UT+7q2vozcWsamNSM1UzTxPjMZ/SJRnoF6NOldj0axGizDS3FLre5LZHVV9VcbNTVNQZpt5XMdI9hc7gMnAOfINAHJYz0n/Rw0vr9CcumwzS/GLTerdRG5UlVa7PT0047Bwke0OjYCQ6Nr27b89+uyseAGgAAADkAFxzwQVcElLVQxzQzMMckcjQ5r2kbFpB5EEbjZeLF7rRreu7p5zz78vpKum282/2ftjGMZxHljLwcXs/6OWd/XI0Qw7LX1DZqmotkUFY4HvqYfkpiem743H6R713PrAaD/wACeBf1bo//ABracexjGsQtrbLiePWyy29j3SNpLdSR00Ic75zgyMBu58Tsu/1Pqenf6dNNNMxMS8rovRdbpWrVVVXExVHEZ/zzZREReK+kEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBQpnGoWZ2pmsotd57B2K2ehqbOTTRP9Vmkp5HvdsW+3u5rTs/ccuWymta3ctPMPu/1Q/GFn7b6q6eKlu/8ArErfWYo2FjG8nDg2a5w3Zwk7812rXV0tKqZ1acxt4RP4omefdEx+eHTvdHW1qIp0asTv4zHNNURx75ifyzyjlmreTMyDFcAyERWfLWZBHRXimjja6C50Bo6p7aulLwSYXyRRk7bPjcCxx+6+T3nJKuLI8jueqGb2umpMhrLRSUWP4/S3FkTIh7BcxtvqJwPZJc9x4dyBuN2hSjeMOxnILvZ7/ebNBU3KwTvqLbVHcSUz3MLHcLgQSC0ndp3aeR23AIwVZo/hVbX11x7TJaSS5TvqaqO35VdKKCSV23E/sYKhkYJ257NG55nmu1Tc2u0zRjbfaJ3zvjPhj84497p12l5iYivu32zVVG2IiM9vjnOeInnadkc3/N9Qbh9aijx7Ib/cPqlxirulxnxamtkctdLHHQFk7BdWNZHETUSO4dmv9toLeWwz2oFw1QxCx4TRYfklVdb5eMjEMzMhio2uqIBb6uodRyOpYmRx7up2tEjASHc93N3B2y5aR4Lc6awUrqG40TcXon260utl5raCSmpnNia6IPp5WOc0iCLk4n5g813qLT/GaGK2QllzrDZrg66UMlxu9ZWyxVLoZIC7tJ5XvcOzlkaGElo4iQAdik3dtEU9tHHd+GN8zVjM58Mx4Rx8EiyupmvurnftxiqdsRTnEY8cTvmeffLQrJrDPmF8vAsdTUUMduxaWqqrXVQMbU266RzPa+OYEEh7QG8ty1w2cNw4E6/V53qRdsY0cfbbrkktbleOm43Y2CC0tq6mYUdNJxj19ogY3jkeSG8J5gActhMcmC4k+/XLJ/iSBt0vFC2219UwuY+pp278LX8JAJG5Ad87bYb7AAYyu0kwavtuPWk0VypIMVpfUbQ633qtopqaDs2R8HawSskeCyNgPE477c+e6tF1aUVRMUbe+In8Mx5xneYnw4zympZ3tdExOpv7pmPxUz5Tj2YmPHnHDT8/uuV4Th2M9rneYsnvOQU0FbVOtdBWXSnp5KeVzqdkNJSPhe5roxuWRSHfi2cW7EapS6p5HPhWqWT4bn+Q5DZ7BjPrNqvF5sUNG+C7Ris9YiY31SBsoYI6YuDo3cLiQTzIUzUOneMUVLRUhbda1lvuIutK+5XqtrpYqkRmMOElRK9/CGl3sb8G5J4dySuGr0swStfkrp7G4NzGnNNe4oqueOKsaWcBcY2vDGyFnIyNAeR3uV07u1ppxXRmcxOe2n+aJ45425x4Y3ymrZXlVXdRXiMTGO6r+WYic8c7/dz452wjLWjWW44yLDjthzyw4/ezaX5JWSXaopoWVkUTA2OiaZuQdUSkjiaN2tifttuCphw/KrTnGLWnL7DN2tBeKSOrpye8Ne3fhI8HDuI8CCF9s2J2CwXC4XW1UJiq7oIG1UrppJC9sLOCJo43Hha1u+zW7Ddzjtu4k/cexax4rb57VYKJ1JSVFVUVjoRNI5rZZpDJKWcTjwAvc53C3ZoJOwC62vrW9ejTRp0zFUeO2+ec/CeN528nbt9C509erU1K4mmrw32xxj4xnu2jfzQfePSHpbfrA6H6v7DHjFBeYsTqrG6opxWvqXsPHXhp+W7OOd8UBA2aA2Z5B2BW9GDLsu1Byu102pN+sFDY/UYqemtlLbnNcZYO0e57qmlmeTufBwGw7vFbS3T3DmYTLpz8TNdj09PLSy0j5pHF8chJk3kLu0Li5znF/FxcR3335roXHSXDbncpLs9+RUtXNDDBNJb8nudF2zYm8LDIIKhge4N5cbgXHxJXPVc2k/cpxiMcUz4xiZicbzvnnnl1qbS9j79cVZnuxmqnG0xNMTGZxG2OOJ2aFkLtRKXC8Tv0WtNe6tuFxs9orJbNBa56GoE9UyCWojdJRudxlrieRDA7uYByW52WryG0ajUuFV+U196pG49LXvnroaZk0s/rbWhzjBFG0bMdwgNaBsATueazcGA4nTY7acThtRFqsc1LUUMHrEpMUlPI2SFxeXcbyHtDjxE8R+dvuVxZNp3jGW3OnvN1F3grqWB1LHUW291tukMTnBxY40ssZe3iaDs7fY93iuObnRrjtqjEe1vFNOd+PLj4uWm019OYrpqzPs7TVVjb73nz8Pk0O+au1uIYTqJkl5ulKZrPkMtms3rRZDEySSKnbTse7YDgEkpc57tyGBxJ2CwePay3Ou0d1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                    <h1>Formulario De Supervicion de MHA</h1>
    
            </div>
            <div class="row ">
            <div class="form-group 	col-6 border space">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" class="form-control" id="nombre" placeholder="
        ">
            </div>

            <div class="form-group col-6 border space">
                <label for="fecha">Fecha</label>
                <input type="date" class="form-control" id="fecha" placeholder="">
                <label for="ejes">Ejes</label>
                <input type="text" class="form-control" id="ejes" placeholder="
       ">
            </div>
          
            <div class="form-group col-6 border space">
                <label for="elemento">Elemento</label>
                <input type="text" class="form-control" id="elemento" placeholder="">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" placeholder="
        ">
            </div>
            
            <div class="form-group col-6 border space">
                <label for="nivel">Nivel</label>
                <input type="text" class="form-control" id="nivel" placeholder="">
            </div>

        </div>

    
            <div class="row ">
        
            <div class="form-group col-xl-6 border ">

                <div class="row space box" id="camara">                       
                    <div class="form-group col-6 border">


                    


                   
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">




                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                    <div class="form-group col-6 border">
                    

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">




                <canvas  class="canvaselement "  ></canvas>
                    </div>

                    <div class="box  border" >



                 
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">



                <canvas  class="canvaselement "  ></canvas>
                    </div>

                </div>

            </div>
    
    
                <div class="form-group col-xl-6  border ">
    
    
                    <div class="row space">
                        <div class="form-group col-4">
                            <label for="DIMENSIONES">Dimensiones l1,l2,l3-ln
                            </label>
                            <input type="text" class="form-control" id="DIMENSIONES" placeholder="
                        ">
                        </div>

                        <div class="form-group col-4">
                        <label for="RECUBRIMIENTO">Recubrimiento</label>
                        <input type="text" class="form-control" id="RECUBRIMIENTO" placeholder="
                    ">
                    </div>

                    <div class="form-group col-4">
                    <label for="REFUERZO">Refuerzo vert l1,l2,l3-ln</label>
                    <input type="text" class="form-control" id="REFUERZO" placeholder="
                ">
                </div>

                <div class="form-group col-12">
                <label for="ESTRIBOS">No & se de estribos o ac-h l1-l2-l3-ln</label>
                <input type="text" class="form-control" id="ESTRIBOS" placeholder="
            ">
            </div>
                        <div class="form-group col-12">
                            <label for="ELEMENTO">Long elemento de borde l1,l2,l3-ln</label>
                            <input type="text" class="form-control" id="ELEMENTO" placeholder="
                        ">
                        </div>
                        <div class="form-group col-12">
                            <label for="ELEMENTOS">Ref- vert elemento de borde l1,l2,l3-ln</label>
                            <input type="text" class="form-control" id="ELEMENTOS" placeholder="
                      ">
                        </div>
                        <div class="form-group col-12">
                            <label for="ESTRIBOS1">No & se de estribos o ac-h en elem de borde l1,l2,l3-ln </label>
                            <input type="text" class="form-control" id="ESTRIBOS1" placeholder="
                        ">
                        </div>

                      
                       
    
                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Comentarios</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1 " rows="4"></textarea>
                        </div>
                    </div>
                </div>
    
            </div>






    
     <div class="row ">
        
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="biggerBox border">


                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="biggerBox border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    

            
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             

                 
                    </div>
        
                </div>
    
        
             
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario De Supervicion de MHA</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             










                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>
        </form> `
        }


        if (select.value == 8) {
            div.innerHTML = `<form action="">
            <div class="row border">
              <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OC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1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                    <h1>Formulario De Supervicion Vigas y Columnas de Acero</h1>
    
            </div>
            <div class="row ">
            <div class="form-group 	col-6 border space">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" class="form-control" id="nombre" placeholder="
        ">
            </div>

            <div class="form-group col-6 border space">
                <label for="fecha">Fecha</label>
                <input type="date" class="form-control" id="fecha" placeholder="">
                <label for="ejes">Ejes</label>
                <input type="text" class="form-control" id="ejes" placeholder="
       ">
            </div>
          
            <div class="form-group col-6 border space">
                <label for="elemento">Elemento</label>
                <input type="text" class="form-control" id="elemento" placeholder="">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" placeholder="
        ">
            </div>
            
            <div class="form-group col-6 border space">
                <label for="nivel">Nivel</label>
                <input type="text" class="form-control" id="nivel" placeholder="">
            </div>

        </div>

    
            <div class="row ">
        
            <div class="form-group col-xl-6 border ">

                <div class="row space box" id="camara">                       
                    <div class="form-group col-6 border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                    <div class="form-group col-6 border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">




                <canvas  class="canvaselement "  ></canvas>
                    </div>

                    <div class="box  border" >



                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">



                <canvas  class="canvaselement "  ></canvas>
                    </div>

                </div>

            </div>
    
    
                <div class="form-group col-xl-6 border ">
    
    
                    <div class="row space">
                        <div class="form-group col-12">
                            <label for="Obra">Tipo de Perfil en Obra
                            </label>
                            <input type="text" class="form-control" id="Obra" placeholder="
                        ">
                        </div>

                        <div class="form-group col-12">
                        <label for="Planos">Tipo de Perfil en Planos</label>
                        <input type="text" class="form-control" id="Planos" placeholder="
                    ">
                    </div>

                      
                       
    
                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Comentarios</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1 " rows="12"></textarea>
                        </div>
                    </div>
                </div>
    
            </div>






    
     <div class="row ">
        
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="biggerBox border">

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">


                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="biggerBox border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">


                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             



                    
                    
                        </div>
                    </div>
        
                </div>
    
        
               
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario De Supervicion Vigas y Columnas de Acero</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             










                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>
        </form> `
        }


        if (select.value == 9) {
            div.innerHTML = `<form action="">
            <div class="row border">
              <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6qm7U8A58G/IOd+oeKwGlOl1c2tOf5251TeKo9rDFLz7Hf7Y/fdB4Li0v04q664HUTP3ioulU7taeCUgiIHucR16DwUw9rF/wDcb+NRY33JvsMn4J/Qq64/jhyfTnNqOJgdPTXV9VDy5hzASdvo3U55ZktBi1gq73XB8kNO32mx7FxJ5BV40+1jtGHQXmlq7PNVMudY+cbPA2Y7wKEpo0byf6qMEoZpXg1FG31WYdCzkD9I2W8qtmiOoNos2X3G1SvdS268zcdM1/dHITyBPuOysNd7tQWO2z3a5VDYaamYXveT4DwHmhDurhqqKkrYjBWU0U8Z5FsjA4fnUEWjWLU7NLxW02GWiglggPGxsrfabHvsCTusZLrtqbFeviAUdpkrO1EHCyMlpefDfdDMJOyLQ3Ar881EVA63VHM9pSO4OfUjuWqHTbVrC5OPC8tNfTA7imqX7cumx5LE5Rq9q1hskMN/oLRBLOOJkYaXO267Armj1T1jkxs5abZaGWwN4u2e3by7t0NmWh1tynGnil1BwqppyDsaiBpDSOu3d+dbxjuq2C5MGtoL5DHM7uhnPZv/ABFRPjmq+q2dunprTYrPWCBodK2WH2QD7yo/vtbVZHf/AIkbjVpp7k+bsQaAcAMnv3RMrjNc1zQ5rgQe4g7r6qkVF51R0mqIKGqvD4XOHG2lfL2o4epb4Bby7VPWKLGGZdPbbRHbHtDmzPbtxb8hsN+9Fyn5FX3FdWtYMz9ZNgtNrnFIAZSWcPDvvt3nyK6VLrnqfXX1mOUdFapq183YNayMlrneR3QyseirxlOserGH1DKO+0NohqJW8TY2sLnAdSAeSk3SfUiHUGyGWoEcVzpTw1MLeQ8nAdChnLekREUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEXTud3tlmpnVd1r4KWJo3LpXhv/wDVEOY+kjZrf2lHilGa+YchPJ7MQ8wO8oZwmSqq6WhgdU1lRHDEwbufI4NA/Gory/0iMWsnaUtgjddapvIOb7MQP4Xj9Cr/AJRnuVZhMZL5dpZWE7iFp4Y2+5oWvK4Zzlt+W6qZlmJdHcro+KlJ5U8HsM289u9agTvzKIqgiIqCIiAvrXOa4OadiDuD5r4iDKfVTkf/AByu6fZ3f4p9VOSf8drvy7v8Vi1kbFeBZK+OtdQU1YxpHHDUM4mvHiPJB8qcgvlZA6nqrtVyxP8AnMfK4tPvBWPU03286XZPpzcK2x2Kjtl5gDC6DbZ4O/MsPiFCykTkfWucxwe1xDgdwQeakuHNbvqY2zYjkV5gt1roWg1lQ9/D2wb3F3U7ch5qM13bKyCS70UVUxr4XzsbI13IFpcAQUG7V2QNxvK79ZMFrIIqO6cFHHVB+wZEANyHefPmshldNiWGY9YHY7eKO63anrTVVksb+IucANh+CDupoi0R01lhY/4gbs9odykPiF+xobpqO6wD8o5ZXCG6AWXI7RfM7zfIaSa9VVPI2honSc4ztyPD+gLE4hW/Vn8VYxkd/gtmPWf5SRsknB2xJ3I8yfzBTz9Y3TX/AIAPyjl9Oh2mp77APyjkMSgKpyT4lyLIcfw+ogp6O8zNpo6lr9mxwg94Ph71ksobimB0WNz4rdaO7XGiqXVNXMx2/HJty/mhTX9Y7TXbb4gH5QoNDtNR3WAflHIYlDVLTWC749fc4y/IaWpyC4QvNJSGTnF05e7uHgsfhtSzNn2qyZdfqe3Y7YmD5J8nD2x3328yevgFmNa9MbBh9da7laY5Ke31svYzsHtCMjxG/ktjk9G7GY7abo7KK4QNg7ffsm7cPDuqmEdSZDJRXm/4vi1ZBR0V7q2R+tCThayBu/j4A781lcpqcW0+mxaow64Ud1rLcZJ6mdjt+0lPdv5dAslolpZYcuNwvN7jkno6aUwQRb7B5+6JHQfpUsDQ7TUd1gH5RyLiUKmisNbiF+zHKcipK3JLjFxUtP2u7od3Dw67dw8Aurbrjb9P3Y9m+L3aKeSaMR3OhEntNPiCOhH51Of1jdNd9/iAflHJ9Y3TX/gA/KOUMS26wXuhyOz0t8tsnHTVbONh+nYj3ggj6FkF0bNZ7dj9sgs9ppxBSUwIjjHhuST+ckrvI0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/MjxFG6RwOzAXHbyVf8z9JKsbPNb8TtghEZdGaipG7twduTe78asCRvyKiTVjRCjylst9xtjKa6Nbu+EDaOo/wd5ok58FdL7k9/wAkqTVXu6T1bydwHvJaPcO4LFrs3C3V1qrJaC40slPUQu4XxvGxBXWW2YEREBERAREQEREBERAREQASO5ERB+jG8AEsdse47d657eD6/TeyT8swf/sFtOAahzYfOaetttNcbdNykhlia5zfNriNwVKfo601quvx9UTUVPKDVCSISRtLmNJJG3RTJym6g/aNN/7LP0BdhfAABsBsAvqy2IiICIiCO9eLL8cae1j2Rl0tE5tQ3yAPP8ywM+ZE+j+Lr2hM76T1InfmH/N/QpTvtvbdrNW214BFTA+PY93MKprbzO/FGaaNY4zG8k8Plvtt+NGZ2WE0QtDbRp1bRw7Oq+Kpf73H/ALfV07RRR2210lBE3hbBCyMD3BdxGhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQcVTU09HC+oqp2QxMG7nvcGgD3lRfmHpCYlYC+lsvFdapp2PZ8o2/wA7x+hbpnWIU+cY7PYaiqlp+0IeySM9zh3bjxHUKomY4TfcHujrbeqYt33MUrebJW9QUZmZhNM8WFa/2l81GI7Zk9NH3O73AeB+6b594UFZFjl2xa6zWe80roZ4TtzHJw8HA+IXXtd1uFlrorla6uSnqYHcTJGHYg/4Kd7HlOJ632ZuMZgyOhvsY+QqW7AyO6tP6Wq8Jyr6i2TOMDvuCXR9BdoHGIuPYVLR7EreoPXyWtqgiIqCIiAiIgIiICIiAiAb8gt/xHRjKsot8l2mEVromsLmTVfsB58Nh081M4GjUtHV10nY0VNLPJsTwxsLjt15KafRsxptVdKy/vr6iJ9Aey9XYdmSbj7brsu/orlOI2UVOI3CkoaS8AvjbWscHMqdt9hxeB/Ssn6OoInyff8A/NP6SpnKxympERRoREQEWCyHNsXxeKSW9XingdENzHx7yHps3vUT3XXS/ZTWm0af0ENMx27TW1rw0Dz58h9KJlL2R5PZsXt8tddq+CDgY5zGveAXkDuAVPmZZw503L5KOIgV3rRhaPZI4u5TLZtM8crq0XnUjO6e8VpcHuhFUOyB6E78/o2WyR4FonFcW3GP4tD2O4hH6yOz3/B3RJ3brjWYY9llGyrslzhn4mhzo2u9tnkW94WaUI5Hpph5rXXrAs0pbHcN+NrG1IERP4+S4LVrbfsOrBZNQqaKuaNgyuopA/cdTtyci5Tqiw+PZbjuU07aix3WCpDm8RY13tt97e8LMIoiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLBZfjGO5TaZKDI4IXQ7EtleQ0xO+6a49xXBqBf71jOMVN3sFpNwqodvkxueFvi8gd+yqblGomX5dK43q7zOi33EDDwRt/mhEmXd1C00u+C1vGT63bJ+dPWRjdjh0O3cVqEUssErJ4JHMkY4Oa5p2II8Qt/wHVGSyU78ZyuF10x6qBjkhf7Tod/tmb/AKF+890uba6NuV4bUm6Y9UN4xKw8T4PJ/wDirllt+Eam2HPLSMH1QbHI92zaatfy3PhufB3mtF1K0rvGBVRqWg1VpmcewqWc9h4B3QrRe7mDzUt6b6yCkpW4hncYr7NOOxbLKOJ0LTy2O/e39CcHxRIilTU3Rt9hgGTYg91xskw7Q8HtmEHnvuO9vmorVBERUEREBEXLTU1RWzspqWF80sh4WsY0kkoOJZzF8MyPMawUVht0k532fIRtGwdXO8FIuM6JUlroRkuptyjtlCwB/q3HtI/yPT3d648n1vjoaJ2O6aWyO0W9oLPWAzaV46jp7+9ZyY82ZpsX030fpm3DLaqO9X4N4o6RmxYx3hy8PefxKPs51XybN5XQzTmjtwPydHCdmADr1WnVFTUVcz6iqmfLLIeJz3u3JPvKymNYlfsur22+x2+Sd5PtOA2YwdSe4JjAxDXOa4OYSHDuIPPdT56ME9xMl4i9XaaQ8L3zE+12nRatpxaMYxbL6mxaj2sw17AW0kk5+RDtuW/XfwK330dNu1yYN22Fadtu7bc9ySscpqREUaEREEYZvoZa81yGe/1N5qIHzNa0xtaCBsNlgh6MdlbybkdWN+/ZgU2IiYhCf+jHZv3x1n9AJ/ox2b98dZ/QCmxEMQhP/Rjs3746z+gEPox2Vw2dkdWQOrApsRDEI8070ft+nt0nudJdJ6l08PZFj27Ac991IaIiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD4QHAggEHlzUH6t6FMuRkyHC6ZkVRzfUUY5CXzZ0PkpxRDlQeaGamlfBUROjkjPC9rhsWnoQtswDUa64PVuiDRV2up9mqopObHtPftv3HZT7qrozbc0hku9oaykvDGHm0bMqNvB3n5qr10tNxsldLbbrSSU1TCdnxyDYj/ELXLE7JKzLTuz5Ba353pk/1igI4qu3gfK0zvHZvTyUVuaWkhwII5EHwWdw/Nb7hFzbcrLUlu+wlhdzjlb0cFI94xXG9XLdNlOCNbR31jeOttRIAe7xcz3qcDX9L9XK/CZfiu6NdW2Sb2ZIHczFv3lu/5wtm1B0ltl8tpzrTOSOoopGGWakjO5HUtHh5tUM1NPUUk8lLVQvimicWvY8bFpHgQto0+1Iven9yE9E8zUcpHrFK4+y8dR0Pmg1NzXMcWvaQ4ciCOYK+KfMpwPGtW7S/NdPpWQ3EN3qaI7N4n+II8HefcVBVbRVduqpKKup3wTwu4Xxvbs5pVicjgRZKw47esmrmW+yW+WqmedtmN5N8ye4KX6HTzA9LKWO9ajXCO4XLh44rbFzHF3jl4/TyTI0TCNJsozV7KiGn9TtwPt1c44WgeOw8VIFTlGnOjcBt+JU0V7vuxbLVvO7Y3e/3+AWm51rPkOVMfa7Zta7SPZZTweyS0d3ER+gclHhJJJJ3JUxkZnJ8vyDL651ffbhJO4ndrN9mMHRrfBYiGGaokbBTxPkkedmsY3ck+QC2/BdLMozqdrqKmNPRAjtKuYbMA8up9ynCismmOh1uFbcp46m6FvJzwHzSHoxv2oTOCIaFp/6PlzuvZ3XMnut9EBx+rg7SvHmftQtzyXVfBtMKB2OYVQQVNXENuGL7G13V7vtiox1A1xyXMO0oKAm22127TFG725B9879QUbc3HYAkk/SSmMmfJs2V6g37NS03/wBWlkjdvFK2MNdGCfm7jvCmD0X/ANoXnx+VZz68lC9px2OO7UVPl/rVooatvGJ3wnct8CAVNvo1RxQx5BFTv44mVIbG7q0b7FCOU3oiKNiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIuGSspIZmU8tTEyWT5jHPAc73DxQcy0nUfS6y5/QOMsbYLnEzaCqA5g9HdQt2RBRzKcUvWHXWS0XukMUrPmu72yN+6afELq2a9XPH7jDdbTVvp6mBwcx7T+Y9Qrm5lhNjzi1Ptd5pwT3xTNA7SJ3Vp/Uqo6g6cXvALo+nrIXy0T3f6vVtb7Dx0PQ+S1liYw317cZ1zoGmIU1ozGFoLgfZjrAP1/nUR3qy3PHrjLa7vSSU1TC4tc142+kdR5rrU1TUUdRHVUkz4poncTHsOzmnyKmCy5VjurtvixXPHso73E3hoboNh2jvBr1ODlGmKZde8Nusd1slW6J7T7ce/sSN+5cPEKbzJpfrVbBe7xM2zXShaH1pa4NcWjv5n5zfPvUJZdh18wq6Ptd6pXRu3JikHNkrfumlYUOe0ENcQHDYgHvCuMkJmvmsNgxGhdjmlNsigYBwvr3s3c89RvzPvKiG43K4XerfX3OslqZ5Du6SRxJK6zWue4Ma0ucTsAOZKlbTzQW+5MWXLIg+2W7k4NcPlZR5Dw95Tg3lG1nsd2yCuZb7PQy1U8h2DI277eZ6BTtheg1mx2AZBqJW07uzHH6uX8MTPH2j9sfJZq85vpxo3QOs+N0UNTcWjhdHEQXE9ZH/AKlBOa6jZPnVT2t4rCIGkmOmj5Rs+jx95U5XaErZx6QVFbYH2LT2kja2McAqywBjfwG/rKgu5XO4XerfXXOslqZ5Du6SR25K4qWlqa2dlLRwSTTSHZjGNJcT5AKbdPfR2qq0R3XNnup4Ts5tGw+24ffHw/SrwmJlFGMYbkOXVRpbJQPlDGl0kpG0bAO8l3cuK0dtbL0wiqipuymMRqZIu0Ywg9+xV0Kay2qw2WW3WehipaeOFwDI27eB5nqVCGjmH2TNLFlFpvdMHsNeDHIOT43bO5tKmVw57zpZqPm9qgmuOa2u40bW9rBI2PkG7eBA5Bd30Z4XU0F+pnkF0NQIyR4kbhYegu+UaFXh+PX5sldjdYXCnmHczfxafA9WrOejhJHM7I5oXcUclXxMPUEnYoRymxERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBEOt2pOYYY+Ohsdt7GmqIx/6i5vEA877tHgD3d/VV1rsmyC5XAXSuu9VLVNdxNlMp3afLors3qyWvIbdLarxRsqaWYbOY8fnHQqrWqekF0waqkuNvY+qs0j/YkA3dFv9q//ABVhmrzSPpJrpBdWwY3mE4jreTIKx3Js3QO6O8/FTYCCNwdwVQYEtIc0kEHcEKbdI9c5LV2ON5jO6Sk5Mgq3c3RdA7qPPwSYInzWNXQvdjtWR26W1XijZU00w2cxw/OOhXbgnhqYWVFPI2SKRocx7TuHA9xBXIo0qTqnpBdMDndcaPiqrPI/ZkoHtRb9zX/4qO2lzXBzSQQdwQeYKvpV0lLXU76SsgZNDIOF7Ht3aR7lW7VvQ+ox90mQYnBJPb3EvmpwN3QeY6t/QrEszGHSxHUayZJao8I1Pj9YpfmUdxP2SmPcNz37ea46v0esxddGw2eSlrbbMQ6KuEoDSw+JCizbbkt/wvWbKsMtVRaKaRtVC5m1MJjuKd3UeXkmE+KXbJgGnWj1vbe8qrYamvA3D5QDz6RsUeaha+XzJO0tmNh9stxBaXg/LSDzP2o9yje+5Deckrn3G918tVO/7Z7twPIDwX6sGN3vKK5lusdvlqpnd/AOTR1J7gFcGfJjnvfK8vke5znHcuJ3JK3bAtI8ozqRs0MJo7fv7VVM0gH8EfbKXtPvR6tNnEV0y5za+sGzxTj7DGeh+6P5lMUUMVPE2GCNscbBs1rRsAPIKTK4zy1LBtL8YwWnb6hSNnrdvlKuUbvJ8ug9y3BEUacNYxz6SdjG7udG4AdTsqaSRZPjt0nbVTXKz0c9YWTSMDmgHc8+Xedt1ca5XS32ejkr7pWRU0EQ3dJI7YBV51Y1vt2R0s+OY/bIaijkG0lVUM9onqweHvRmpl4dFxl1mjuMGpVVc7e9vaRl4LgCB0J5Fdv0aoPVY8gpQ7iENSIw7rtuN1FOmuplzwKuezd1Ra6kFtRTF3LmPnN6FSx6NszKkZFUxb8EtVxt379iSQqRym1ERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBoea6y4hhcklHNUmsr4+RpoOZa7o49wUY0vpKT1t2fBfsfp32Wcdm+JvtPa0+J37/cs/rFokb4+fKcVZtXO3kqqYn7N5t++8lXKWKWCV8E8bo5GHhc1w2II8CFYjLM5SzqBpHRy20Ztp3Ka+1VG8slPH7ToAefLx2HTwUSEEEgjYhbdp7qTesBuAkpnmeglP8ArFI8+y8eJHQqQcv07sGotqOb6YGPtSC+roPmu4u87N8HeXimcJ8GvaVaz3HC5o7VeXy1dncduHfd8Hm3y8lZ+z3i2363xXS01cdTTTN4mPYd/o8iqKTRS08r4Z43RyMPC5rhsQehW3adal3rT+5CWleZqCVw9YpXH2XDq3oUmFicLlL8ua17SxwBDhsQRyIWHxTLrHmVrZdbHVtljd89hPtxu+5cPArNKNIJ1Y0GbVGXIcKgayX2pKiiB2DvElnn5Kv5pagVBpDBJ23FwGPhPFxdNlfZYb6jsY+OjkXxJSm4Ebdvwc/f0381YnCYV80/9H2838R3LKHPttEdnCHb5aQe77UKwuOYrYsToW2+x2+OmjHeQPaeepPeVl0UIjAiLA5Xm2OYZRGtvtwZFyPBEDvJIegais6SGglxAA7yo01A1yxvD+Ogtrm3S4jcGON3sRn7536gof1B11yHLTLbrQXWy2uO3Cx3ysg++d4b9AoxJLjudySfxqxDOWxZhn2S5tVmovde98YcTHA07RxjoAteDHuBLWkho3JA7lIGAaM5PmskdXNC6gthO7qiVuxcPvB4qQ6ODSrSE3Gx3m6NvL7k9rHxtpw98Ee22ziD/wDNkzhN/FrWl2i1py6yyZBd7018PC4Np6Vw42OA+3Ph7ltvo2Qspm5FTRklkVV2bd+/YEgLTaytotLr3Hk2n2QwXGy144ZqIybuaCPmuH6D3rcvRrnFUzIapreET1QkA6A7nZFjlNyIijQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIuvcK2G2UFTcqgOMVLC+eThG54WtJOw67BB2FGGqei9szWN92tAZR3djTzDdmT9A7z81oWZeknc6vtaLEqEUkR9kVM3OT3gdwWK0615vthuHquVVMlxt07/bkfzkh3+2b1HkjMzHCMbtaLlYq+W2XWkkpqmE7PjeNj7/ADCyOI5nfMKujLpZaosII7SI/Mlb9y4Kz2Z4NiurePx3KgnhdUuj4qSui57feu27x5HuVXcrxO9YbdpLRe6Yxyt5seObJG9WnxWs5ZmMJhudjxPXS1SX3GeC25LTR71FKdgJj59fJ341CF0tVwstdLbbpSSU1TC7hfHINiF+7Le7pj1xiutorJKaphO7XsP5j1Cm+kuWI682gW27tgtuWQR7QzDkJdunUHxHf0U4XlEGHZpfMIurLpZqjhO+0sTubJW9HBWu091JsmoFtE9HI2GtjA7ekcfaYeo6jzVTMqxO9YddpLRe6UxSt5tcObZG/dNPiF1bLe7pjtyhutoq301TA7ia5p/MeoVxkicL2Io50v1htOd07LfXOjo7wxo44idmzebP8FIyy2Lhq6yload9VWVEcEMY3fI9wDQPetLzvV7FcIa+nlqRWXAD2aWE7kH749w/Sq2ZvqdlGdVBNyrDFSAns6WI8MbR59fpRJnCW9QPSLpaN0tswqJtTKBwmtePYafvR4qA7verpfq6S5XetlqqiU7ue87/AIugXVhhmqJWwQRukkeeFrGjck+QUv4HoBcLhE285rL8W0DBxmEkCRzfvj9qFrhmd0a41iV+y2vZb7Fb5Kh7jsXgbMYOrndwU52LSrBNMaBuQagXGnq6tg4mxP8AmNd0a3veV+cl1jw/AKB2O6dW+nmnjBYZmt+SYe7cnveVBOQZLe8or3XG+XCWqmd3Fx5NHQDuAU5NoSTn2v8Ad74yS04pG612/bh7QcpXt+j5o9yiWSR8r3Syvc97ju5zjuSeq5qOgqq5zvV4nFrOb37eywdSfBSLpDa9ODUVVyzm5QiSllDKenkJ7OQbHdx271eDeWM0s0/ueY3N1UylhfbaT9tuldy227gO/dSr6OEUcDskhhaWxx1nCwHwaCdgtJyC42jT3JPqq00yWnqqOqcRUUAJ2aD3gg97enRbL6OmR2llXdqSrrIoKy51PaQQE83d5Oyiwn1ERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBflzWvaWPaHNcNiCNwR0X6RBBurmhcVayoybD4OGp+yT0TAOF/Us6HyVeZYZaeV8E8bo5GEtcxw2IPQhX4UWaq6K2/MmPvFjbHR3cc3HuZUeTuh81YnCTCCtOdTr3p/Xh0Ejqi3SuHb0rj7J829CrIT02Ea0YsHgxzse3ZsgA7amf06g/mKqPdLXX2avmtlzpnwVMDix7HjYgrKYbmt8we6sulmqC3wlhd8yVvQj9aYZiccu/qFpvfMAuboKyJ0tC93+r1bW+w8dD0PktWpqqooqhlVSTPhmidxMex2zmnqCrc43lOH6yY3JQ1UEb3uaBVUch9uN33TfLoQoI1S0dumCzPuVBxVdne/ZkoG7ot/B/+KRJjDa8Wz3HdU7Y3C9SGxxV2wbSXEbNcXeG58HfmKjrUHTi9YFc3QVcTpqF5/1era32HjwG/gfJamCQQ5pIIO4IUv4Dqtb7lbBgmpMTay2TARw1cnN0XTiPfsOveE4ESU1TUUc8dVSTPimicHMew7OaR4gqRLnr3nNwx+GyNqWU8rWlk1ZH9llH6j5hdfUvSe44W/41tr/XrHUHeCpZ7RYDzAdt+ladZbDdsiro7bZqCWqqJDsGsbvt5k+AV5N3SlllnkdNNI6R7zu5zjuSepK3HBNKMozqdr6SmNNQ7+3VzAhg933X0KTcW0SxvDqAZLqXcYHGIB/q5dtGw9+x8XHyCxOdekFLNA6x4DTCgpGjgFTwBri37xvc0KZMebamU2leh1F2tQ9lyvYbyHJ8xd5DuYPeojzvV7Ks5c6nmqPU6DflTQOIB/CPef0LS6mpqKyd9TVTySyyHic97i5zj5lbHhWnOTZ1VCK0UZbTtPylTICI2D3+J8gmMDWWRvle2ONpe5x2DQNySpZ080AveRiO55KX2yhJBEZHy0g932o96lvBNG8VwSNtwqwyur2N3fUzgcMfXhB5D3rC6hekFZrA6S24s1lyrmnhdKfsMZ9/2xSZXHm2S7Y5plhmH1FnusFLR22WPaXiPyspHjv3ucqnXz4mF1qBYHVBoOM9iZwA/h89lzZDlF9yqtdcL7cJamUklocfZZ5NHcFilYhORZjEsgfi2QUl+jpmzupHcYjcdgVh0QXE0p1Aq9Q7PVXSqt8dIYJzE1rHFwI2335rd1R+x5rlON0z6Ox3mejhkdxuZGRsXdeasjoFld0yfFqk3qukqqqnqnN7R/fwEDYfpWVicpPRERoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBpOpGl1l1AoT2rG01xiB7GqY0b7/cu6hVRybF71iN0ktV6pHwysJ4XEezIPumnxCvItdzXBbFnVtNvvNOC5oJhmbyfE7bvB/UiTGVNbJfbrjlxiutmrJKapiO7XsPeOh6hWi021VsWo9u+JrwyCK5lnBNTSbFk425lu/f7lXjPtO77p/cvVLnH2lNKSaepYPYkb+o+S1qlq6mhqY6ujnfDNC4PY9h2c0jxBWuUjZMGreh1RYXyZBiUElRQOcXTUzRu6Dx3HVv6FDfdyIVltJ9cKXI2xY7lsscNwI4I6h2wZUeR6O/SsdqzoSysEuR4VA1s3OSejbyD/EuZ5+SkSY8mh6Z6u1OLt+p7JI/jGwz+w6KQcRhB8W7948lIt71S0403t7qPALbS1NbUt7QGEew3fxe7vP4KrlLFJDI6KVjmPYS1zXDYg9CvyBudgNyVcGWdyrNcjzKtdW324STc/YiB2jYOgb3LGW22XC71bKG2UctTPIdmxxtJJW/4Bohk2YiOvrWm221x37WVvtvH3rf1qwVkxbBtLLO+pjbBSMjbvNVzkdo/6f1BTOEiM8o10+9HONgiumcScTt+JtDGeX8936gpHyjOcL0xtrKWUxROY35GhpgOM9OQ7h5lRbqB6Rk1Q2W2YRG6Fh9k10g2efwW+HvUIVtdWXGpkrK6plnnkJL5JHcTifeUwuYjhu2e6x5Rm0klMJ3UNtJ9mmidtuPvj4laEtkw7T7Js3qxT2WhcYgfbqJBwxMHmVYfENAcNsVFtfKZl3q3gcb5h7DfwW+CZwbyqoiuV9aDTb96VD/QKfWg02/elQ/0CmTCmqK5X1oNNv3pUP8AQKfWg02/elQ/0CmTCmqnb0XrpwVt5tL3/PjjmYN+hIOw/EpU+tBpt+9Kh/oFZOw4LieMVD6uw2Omo5pG8Dnxt2JHRJnK4Z5ERRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBjb9YLTkttltN5o2VFPMNiHDm09QfAqreqGkN2wSqfW0LJKuzvO7Zw3nF96/p71bZcFZR0twpZaKtgZNBO0skjeNw5p7wUSYyoY1zmkOaSCOYIPcVOWkWuj6Iw43mlSX052ZT1ruZZ0a/y81jtWtD6jG+1yDFY3z2we1LTjm+DzHVv6FDpG3IrXKcLU6maM2jO4xerBJBSXJzQe0b9iqB4F23j5r5p9oTj2JtjuN94LlcW+1u8fJRHyB7/eVFOlmtlwwsttF8MlZaD83nvJB+Dv3jyXHqDrrkWW9rbrSXWy2uJHDG75SRv3zv1BZMxyl7UDXHG8Pa+22fguVxbu3s4nfJxH74j9AVcsszjI80rDV3y4PkAJ4Im8o2DoAsCSSdzuSSpE0/0VybNHsrKqJ1utp5meVvtPH3rfFXGEnMtCobfXXSqjobfSyVE8pDWRxt3JKnXTv0dj7F1zp23c5lFGf+s/qUr4bp3jGD0wis9C0zkbPqZBvI/6fD3BbOkysUurbrbQWmkjobZSRU1PGNmRxt2AC7SIo0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/L2NkaWPaHNcNiCNwQoI1e0MM5qMnw2D5Q+3PQsGwPVzPPyU8ohMZUGkjkhe6KVjmPYSHNcNiD0IWWxnEb/l1c232K3yTvJ9pwGzGDq53cFZnN9DsezG9QXqOdtveHcVUyODiFT7zxDhPnsVvFix6z43QMt1loIqaFg22Y3Yu8ye8q5ZwjnT3QOxYyI7jkXBc7gNnBrh8lEfIeP0qVmtaxoYxoa0DYADYAL9Io1wIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg6F+unxJY7jeuw7b1Ckmquy4uHj4GF3Dvsdt9tt9iqNfspn8Rf9p/8AKK+iLt22toaUT67T7/zmMfJ0by3utaY+z63q8c+zFWfnwoX+ymfxF/2n/wAon7KZ/EX/AGn/AMoqb6u/72M1/lFcv+5kVt/guv8AaDUH/k7f/wBcy+mubCxtrebj1WcY27p8ce98VZdV6neXkWvrsZmYz20zxnwx7vNMHo6+m/8AX+1FbgH1sPiLioZ6z1v469a+x8Ps8HYM7+Lv4vDuU0636rW/RTTK8aj3C3/GAtgibDRCcQmplkkbG1gfwu25u3J4TsATtyW+KlPwjuT1t2jwLRWyPLq3ILkK2WIeJBEFODtzIc+WT6WDv5beBoaeje3dNGnR20+MZmeN53fVXOrcdNsK69XU76/CcRG87RtG20sD+ymfxF/2n/yiu5h+S0GZ4pZsutbgaO9UEFfBz32ZLGHgHu5gO2PILxBySx1mL5FdMZuI2q7TWz0M4222kieWO5e9pXqB8H7nYy/0faKy1FT2lZi1bPa5ARs4RE9rEfdwycI/AXp9Y6boW+hGtb04333mdp+P+bvG9H+sXV3c1W93VnbbaI3jniI/yEhekfrj/o+6ex559S/x/wAdxhoPVPXfVdu0a93Hx9m/u4O7h8e9Vf8A2Uz+Iv8AtP8A5RSb8I/+56g/lFR/3cy8vlvpHTra6t/WatOZzPjP7S4uv9XvbG79VoV4pxHhE/WHo7kXp66o4hbjd8t9EPKbJQB7YzVXGvqKaEOPc3jkoQ3c9N139P8A4SXSjJK6ntua4xd8VfUFrDVdo2spInEke29obIG93MRnvO+225tNlVjtOTY3dMev8EU1uuNHLTVTJWhzTG5pDtweXIHf6F4WrHTrWz6lRVE6fbMY4mfH4/BydXvuodH1KJjV74qztNMRxjyx5vcLM82o8X04vuo9uZDd6W02SpvcDIagCOsjigdM0NlAcA14aNngOGx32Kpj+ymfxF/2n/yi2vQK73a6/B6Zc26SySNoceySjpXvduewbTzFoB6Auc0dA0DwXnE5j2BrnNcA8cTSRtuNyNx15gj6Ct9N6Xb6lWrRrR3TTVjmY+ksdZ63d6VOjqW1XbFdOZjET9Yeyvo6a5UHpBadtzqksos80dbNQVVB636z2EjOFw+U4Gb7sex3zRtxbc9t1mdaNUKHRrTO+aj3Cg9eZaImOjpBN2RqJXyNjZGH8LuHdzxueE7Dc7HZUt+DHz0UmTZbprVT7MuNJFd6RhOwEkLuzlA6lzZIz7oz0K3b4S/N5qfEcS0wtrnPqb7cH3CeKPfidHCOCNhHiHSTbgdYl0NTp1MdSi2iPZmc/lz/ANPU0urVVdHm8mfbiMf1ZxG3ylr/AOymfxF/2n/yitJp/rZ9XOgTdcfqZ9S4rXX3L4r9d7T9rOmbwdt2bfndj38HLi7jtz8Z16k6AfuBYv5L37+8q13+rdOtrbToq0qcTNURzPG/nLy+hdXvb3W1KNevMRRMxtEb5jyhFX7KZ/EX/af/ACitloLqz9e/S606k/EHxL8aPqWepetes9n2U74t+04Gb78G/wA0bb7c+9eLK9ZvQL/cuYn/AO9cf++nWes9PtrW3ivRpxOccz5T5y16O9WvL+6q07ivMRTM8RG+Y8ohI2t+q1v0U0yvGo9wt/xgLYImw0QnEJqZZJGxtYH8LtubtyeE7AE7clUf9lM/iL/tP/lFnvhHcnrbtHgWitkeXVuQXIVssQ8SCIKcHbmQ58sn0sHfy28/8ksdZi+RXTGbiNqu01s9DONttpInljuXvaVvpPTLbXt4r16czOZjeY248J82Ou9avLa6nTtqsU04idonfnxifB7fYfktBmeKWbLrW4GjvVBBXwc99mSxh4B7uYDtjyCzCrT8H7nYy/0faKy1FT2lZi1bPa5ARs4RE9rEfdwycI/AVll87daM2+tVpeUvrbK4i6t6NaPxRE/3/UREXA7QiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPEPV3/exmv8AKK5f9zIrb/Bdf7Qag/8AJ2//AK5lUjV3/exmv8orl/3Mitv8F1/tBqD/AMnb/wDrmX3XU/8AbqvhH1h+YdF/3ej41fSXoKqHWmQ66fCJ1Nwa41Fo0/a5rHN9prfU28A5937blc4f/Crl6lZlS6eaf5FnFXwllkttRWhru6R7GEsZ73O4W+8rzb9EP0l9NtCazLMh1CteTXS+ZHLEGz26ngla2Jpe+TiMk0Z4nPeCdgfmhfPdM0NSrR1tXTjM47Y/Pn5Q+t61c6VNxoaGtVinPdP9PHzlgvTqwd2Fekbf5mRcFLkUcN7p9htv2reGU/lo5T9IUk/Bn538U6j5Hp/U1BbDkFubW07DzBqKZ3cOhMcsh6bM9y0b0yfSF0x9IWuxm9YRZ8ioa+0RVNLWG6U0EbZYXljow0xzPO7XCTvA+eow9H3O/raa1Yfmb5hFT0N0ijq3k7BtLLvFOfycj19D6nUuOm+q1YxV24/OOPpD5L7TpWvWPX6NWaO7OY8quflmV/8A4R/9z1B/KKj/ALuZeXy9QfhH/wBz1B/KKj/u5l5fLj6B/CfnLm9Kv4/+mP3X41o9NDXc6d3WgPo1ZJgYuERo33u6CqfHAyQFruDjpomiQg+y4uOx57FVM0WwTTbOsmp7fqXqtR4bb3ScJdJSyySTAbHYScPYxb7kB73bDhO4+aHezVwoKG60FRbLnSQ1VJVxOgngmYHsljcNnNc08iCCQQvE3VvGKLC9U8vxG2gijs19rqGmBJJEMc72sBJ578IC6/RtfT16K9LSp9XPOY3+uXb9IbbWtdTT19ev1scYmMf+uOXq7n+KYtg/oqZfimFQxx2O34PdWUXZydoHxmjld2nGPnF5cXl3iXE+K8z8nwMO9GvCdTaaEbx3652Ksk25kENmpx9G1R+NWB9E/US+ZB6Kmt+n12qpKilxjGK6otznuLjFFU0dVxxDo0Pi4gOsjvJdzSXAnah/B4ZXaKeAy1lDcK27Uga3id2lMY5SGjxLmNez+euO27unVVRXOcVxmfOJid/1y5bzs6vTRVp04zpVTEeU0zG0fLCtPox579bbXfDsolmMdK24soqw+Ap6gGGQkeIAk4ve0KyWorjrb6b96gdxzWrTqyVZ27w11JTvdv0BFXMPP2fxUdBLSCCQQdwQr2+gfitbXad6t6uXmWSorLxBUW1lRL8+R7YXz1DyfHidLFz6tP0eh1KinRzdfix2/OY/7eT0bUruJpsfw93fP5RO357KIr1J0A/cCxfyXv395Vry2XqToB+4Fi/kvfv7yrXF13/w6f8Ayj6S5vRj+I1f+E/WHlsvWb0C/wBy5if/AL1x/wC+nXkyvUD0VsypdPPQdps4q+EssdHea0Ncfsj2VVQWM97ncLfpU6/TNdtTTTzNUfSWvRWuNO8rqq4iifrCNrTIddPhE6m4Ncai0aftc1jm+01vqbeAc+79tyucP/hUE+nVg7sK9I2/zMi4KXIo4b3T7DbftW8Mp/LRyn6Qs76IfpL6baE1mWZDqFa8mul8yOWINnt1PBK1sTS98nEZJozxOe8E7A/NC6Xpk+kLpj6QtdjN6wiz5FQ19oiqaWsN0poI2ywvLHRhpjmed2uEneB89XQ0tfQvaaYpn1cU9ufDzz8y617a56bVXVXHraq5rx47zjHy3bz8GfnfxTqPken9TUFsOQW5tbTsPMGopndw6ExyyHpsz3L0eXiz6Pud/W01qw/M3zCKnobpFHVvJ2DaWXeKc/k5Hr2mXj+kGh6u5jUj8UfrG39nv+ilz62znSnmif0nf65ERF4T6gREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHiHq7/AL2M1/lFcv8AuZFbf4Lr/aDUH/k7f/1zK5lXoZoncKuevr9HsIqampkdNNPNj1I+SWRx3c9zjHu5xJJJPMkrL4tp3gGDyVE2FYNj1gfWNa2oda7ZDSGYN3LQ8xtHEBudt+7cr6C76zp3FrOhFMxMxH6YfJWPo7q2l7F1NcTETM4+MT/dXH4RzPvqa0Vo8Nppyypy25Mie0O2JpafaWQ9T8p2AP4X0Hc9AvRp0rsejWI0WYaW4pdb3JbI6qvqrjZqapqDNNvK5jpHsLncBk4Bz5BoA5KXco0+wHN5KabNMHsF/fRhwpnXS2Q1RhDtuLgMjTw78Ld9u/YdFnwA0AAAAcgAvMm8mm2p0NPMTEzMz5+X6Pajp/deV3WriYmIiIxxHM/qrh6T/o4aX1+hOXTYZpfjFpvVuojcqSqtdnp6acdg4SPaHRsBIdG17dt+e/XZeU69454IKuCSlqoY5oZmGOSORoc17SNi0g8iCNxstH+sBoP/AAJ4F/Vuj/8AGu/07rH2PTmjViat88vL6v6Pf6hq06mjMU4jE7f2VN9JLOxqR6BmD5bJUNmqaiut0FY4HvqYYp4piem743H6R71QZe379LNMn44zD36c4w6wxz+sstZtFOaNs3P5QQ8HAHcz7W2/MrF/WA0H/gTwL+rdH/41zWfWdK0oqoiicTMzHwlwdQ9Hde/1KdSdSMxTETzzHiizJ/hAPRtsllqLhY8qrMhro2nsbfS2uqhfK7Y7AvnjYxrd9gTuSN9wD3LzCya+3fPszumSVUDprnkVymrHwwtLi6eeUu4GNHM+07YD3BeyH1gNB/4E8C/q3R/+NZrG9OtPsNeZMQwTHrG8uLi622uCmJJGxPybRz25e5cVp1K1sIqnRomZnzmP2hz9Q6Pe9UmmLjVpimP5Yn95/dUPQjQjJdIPRK1dv+a259uveV4zcpPUpW7TU1LDQz9kJB9q9zpJCW94HDvz3A334PGGKo9G4U88TZIpbzXMexw3DmkMBBHQhWZuFvoLtQVNqutDBW0VbC+nqaaoibJFNE9pa9j2OBDmuaSCCNiCV08cxbGcPtos+JY5a7JQB7pRS26jjpoeN3e7gjAbudhudvBdPW6hNxp101x7VVUT8oxh6Ft0qm11dOrTn2aKZp985nOXizq1hMum+pmT4NKCBZrnPTQknfihDiYnfSwtP0r1A0HwV2nvoi2+y1FN2NXU45V3OrB+cZamN82zvNrXtb/NCky+6P6S5PdZ77kuluI3a5VXD29ZXWSmqJ5eFoa3ikewuds1rQNzyAA8FtDqKjfRm3PpIXUrouxMBjBjMe23Bw93Dty2222XYvurfbNKjTxjG8++XT6Z0H/T9fU1e7MVRMR7omf/AI8Hl6k6AfuBYv5L37+8q1MX1gNB/wCBPAv6t0f/AI1tFvxbGLTYPqUtWOWuisgikg+LaejjjpezkJL2dk0BnC7iduNtjxHfvXL1Dq9F5RTTTTMYmJ+rh6T6P6vTtSuuquJ7qZj54/s8LFbbKc/+pr4PPCMMppuCpy28V0T2h2xNLT100sh8/lOwH876DfX6wGg/8CeBf1bo/wDxruVOjmkVbb6G0VmleHz0Nr7T1GllsdK6Gl7R3FJ2TCzhZxO9p3CBueZXPr9c0deaM0T7M5+UT+7q2vozcWsamNSM1UzTxPjMZ/SJRnoF6NOldj0axGizDS3FLre5LZHVV9VcbNTVNQZpt5XMdI9hc7gMnAOfINAHJYz0n/Rw0vr9CcumwzS/GLTerdRG5UlVa7PT0047Bwke0OjYCQ6Nr27b89+uyseAGgAAADkAFxzwQVcElLVQxzQzMMckcjQ5r2kbFpB5EEbjZeLF7rRreu7p5zz78vpKum282/2ftjGMZxHljLwcXs/6OWd/XI0Qw7LX1DZqmotkUFY4HvqYfkpiem743H6R713PrAaD/wACeBf1bo//ABracexjGsQtrbLiePWyy29j3SNpLdSR00Ic75zgyMBu58Tsu/1Pqenf6dNNNMxMS8rovRdbpWrVVVXExVHEZ/zzZREReK+kEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBQpnGoWZ2pmsotd57B2K2ehqbOTTRP9Vmkp5HvdsW+3u5rTs/ccuWymta3ctPMPu/1Q/GFn7b6q6eKlu/8ArErfWYo2FjG8nDg2a5w3Zwk7812rXV0tKqZ1acxt4RP4omefdEx+eHTvdHW1qIp0asTv4zHNNURx75ifyzyjlmreTMyDFcAyERWfLWZBHRXimjja6C50Bo6p7aulLwSYXyRRk7bPjcCxx+6+T3nJKuLI8jueqGb2umpMhrLRSUWP4/S3FkTIh7BcxtvqJwPZJc9x4dyBuN2hSjeMOxnILvZ7/ebNBU3KwTvqLbVHcSUz3MLHcLgQSC0ndp3aeR23AIwVZo/hVbX11x7TJaSS5TvqaqO35VdKKCSV23E/sYKhkYJ257NG55nmu1Tc2u0zRjbfaJ3zvjPhj84497p12l5iYivu32zVVG2IiM9vjnOeInnadkc3/N9Qbh9aijx7Ib/cPqlxirulxnxamtkctdLHHQFk7BdWNZHETUSO4dmv9toLeWwz2oFw1QxCx4TRYfklVdb5eMjEMzMhio2uqIBb6uodRyOpYmRx7up2tEjASHc93N3B2y5aR4Lc6awUrqG40TcXon260utl5raCSmpnNia6IPp5WOc0iCLk4n5g813qLT/GaGK2QllzrDZrg66UMlxu9ZWyxVLoZIC7tJ5XvcOzlkaGElo4iQAdik3dtEU9tHHd+GN8zVjM58Mx4Rx8EiyupmvurnftxiqdsRTnEY8cTvmeffLQrJrDPmF8vAsdTUUMduxaWqqrXVQMbU266RzPa+OYEEh7QG8ty1w2cNw4E6/V53qRdsY0cfbbrkktbleOm43Y2CC0tq6mYUdNJxj19ogY3jkeSG8J5gActhMcmC4k+/XLJ/iSBt0vFC2219UwuY+pp278LX8JAJG5Ad87bYb7AAYyu0kwavtuPWk0VypIMVpfUbQ633qtopqaDs2R8HawSskeCyNgPE477c+e6tF1aUVRMUbe+In8Mx5xneYnw4zympZ3tdExOpv7pmPxUz5Tj2YmPHnHDT8/uuV4Th2M9rneYsnvOQU0FbVOtdBWXSnp5KeVzqdkNJSPhe5roxuWRSHfi2cW7EapS6p5HPhWqWT4bn+Q5DZ7BjPrNqvF5sUNG+C7Ris9YiY31SBsoYI6YuDo3cLiQTzIUzUOneMUVLRUhbda1lvuIutK+5XqtrpYqkRmMOElRK9/CGl3sb8G5J4dySuGr0swStfkrp7G4NzGnNNe4oqueOKsaWcBcY2vDGyFnIyNAeR3uV07u1ppxXRmcxOe2n+aJ45425x4Y3ymrZXlVXdRXiMTGO6r+WYic8c7/dz452wjLWjWW44yLDjthzyw4/ezaX5JWSXaopoWVkUTA2OiaZuQdUSkjiaN2tifttuCphw/KrTnGLWnL7DN2tBeKSOrpye8Ne3fhI8HDuI8CCF9s2J2CwXC4XW1UJiq7oIG1UrppJC9sLOCJo43Hha1u+zW7Ddzjtu4k/cexax4rb57VYKJ1JSVFVUVjoRNI5rZZpDJKWcTjwAvc53C3ZoJOwC62vrW9ejTRp0zFUeO2+ec/CeN528nbt9C509erU1K4mmrw32xxj4xnu2jfzQfePSHpbfrA6H6v7DHjFBeYsTqrG6opxWvqXsPHXhp+W7OOd8UBA2aA2Z5B2BW9GDLsu1Byu102pN+sFDY/UYqemtlLbnNcZYO0e57qmlmeTufBwGw7vFbS3T3DmYTLpz8TNdj09PLSy0j5pHF8chJk3kLu0Li5znF/FxcR3335roXHSXDbncpLs9+RUtXNDDBNJb8nudF2zYm8LDIIKhge4N5cbgXHxJXPVc2k/cpxiMcUz4xiZicbzvnnnl1qbS9j79cVZnuxmqnG0xNMTGZxG2OOJ2aFkLtRKXC8Tv0WtNe6tuFxs9orJbNBa56GoE9UyCWojdJRudxlrieRDA7uYByW52WryG0ajUuFV+U196pG49LXvnroaZk0s/rbWhzjBFG0bMdwgNaBsATueazcGA4nTY7acThtRFqsc1LUUMHrEpMUlPI2SFxeXcbyHtDjxE8R+dvuVxZNp3jGW3OnvN1F3grqWB1LHUW291tukMTnBxY40ssZe3iaDs7fY93iuObnRrjtqjEe1vFNOd+PLj4uWm019OYrpqzPs7TVVjb73nz8Pk0O+au1uIYTqJkl5ulKZrPkMtms3rRZDEySSKnbTse7YDgEkpc57tyGBxJ2CwePay3Ou0d1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                    <h1>Formulario De Supervicion Para imagenes </h1>
    
            </div>
            <div class="row border">
            <div class="form-group 	col-6 border space">
                <label for="nombre">Nombre del proyecto</label>
                <input type="text" class="form-control" id="nombre" placeholder="
        ">
            </div>

          
          
            
            
           

        </div>

    
            <div class="row ">
        
            <div class="form-group col-xl-12 border " id="separate">

                <div class="row space box" id="camara">   
                <div class="form-group col-4 border">


               
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                <canvas  class="canvaselement"   ></canvas>
                </div>                    
                    <div class="form-group col-4 border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">


                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                    <div class="form-group col-4 border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                <canvas  class="canvaselement "  ></canvas>
                    </div>

                    <div class="form-group col-4  border" >

                    
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                <canvas  class="canvaselement "  ></canvas>
                    </div>

                </div>

            </div>
    
    





    

    
            <div class="row   ">
        
            <div class="form-group col-xl-6 border ">
            <span>FOTO DEL PROYECTO</span>
                <div class="row space box" id="camara">                       
                    <div class="biggerBox border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                    <canvas  class="canvaselement"   ></canvas>
                    </div>

                </div>

            </div>






            
            <div class="form-group col-xl-6  border ">
            <span>FOTO DEL PROYECTO</span>
            <div class="row space box " id="camara"> 
            <br>
        
            <label for="exampleFormControlTextarea1"> </label>

           
            <textarea class="form-control" id="exampleFormControlTextarea1 "  rows="8"></textarea>
            
                </div>
            </div>

        </div>


        <div class="row  ">
            <div class="form-group col-6"><span>FOTO DEL PROYECTO</span></div>
            <div class="form-group col-6"><span>Comentarios</span></div>
        </div>
        </form> `
        }

        if (select.value == 10) {

            div.innerHTML =
                `  <form action="" id="form">

                <div class="row border">

                
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                
           
              
                        <h1>Formulario De Supervicion Muros de Cisterna Y septicos</h1>
        
                        
                </div>
                <div class="row ">
                    <div class="form-group 	col-6 border space">
                        <label for="nombre">Nombre del proyecto</label>
                        <input type="text" class="form-control" id="nombre" placeholder="
                ">
                    </div>
        
                    <div class="form-group col-6 border space">
                        <label for="fecha">Fecha</label>
                        <input type="date" class="form-control" id="fecha" placeholder="">
                        <label for="ejes">Ejes</label>
                        <input type="text" class="form-control" id="ejes" placeholder="
               ">
                    </div>
                  
                    <div class="form-group col-6 border space">
                        <label for="elemento">Elemento</label>
                        <input type="text" class="form-control" id="elemento" placeholder="">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" placeholder="
                ">
                    </div>
                    
                    <div class="form-group col-6 border space">
                        <label for="nivel">Nivel</label>
                        <input type="text" class="form-control" id="nivel" placeholder="">
                    </div>
        
                </div>
        
                <div class="row ">
        
                    <div class="form-group col-xl-6 border ">
        
                        <div class="row space box" id="camara">                       
                            <div class="form-group col-6 border" >

                           
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">


                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                            <div class="form-group col-6 border">

                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        
                            <div class="box  border" >


                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        
                    
                    <div class="form-group col-xl-6 border ">
        
        
                        <div class="row space">
                            <div class="form-group col-2">
                                <label for="ESPESORZAP">Espesor zap</label>
                                <input type="text" class="form-control" id="ESPESORZAP" placeholder="
                             ">
                            </div>
                             
                            <div class="form-group col-2">
                            <label for="DimZapLxb">Dim zap Lxb</label>
                            <input type="text" class="form-control" id="DimZapLxb" placeholder="
                         ">
                        </div>
                          
                        <div class="form-group col-3">
                        <label for="Acerozap">Acero zap Long </label>
                        <input type="text" class="form-control" id="Acerozap" placeholder="
                     ">
                    </div>

                    <div class="form-group col-5">
                    <label for="ZapTransversal">G acero zap Transversal</label>
                    <input type="text" class="form-control" id="ZapTransversal" placeholder="
                 ">
                </div>


                            <div class="form-group col-6">
                                <label for="rec">Refuerzo vertical </label>
                                <input type="text" class="form-control" id="rec" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="ref1">Refuerzo horizontal</label>
                                <input type="text" class="form-control" id="ref1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="No">Acero en plateado</label>
                                <input type="text" class="form-control" id="No" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="l1">Espesor de plateado</label>
                                <input type="text" class="form-control" id="l1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="ub">Espesor muros </label>
                                <input type="text" class="form-control" id="ub" placeholder="
                            ">
                            </div>
                            <div class="form-group col-3">
                                <label for="t1">Long desarrollo</label>
                                <input type="text" class="form-control" id="t1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-3">
                                <label for="long1">Vigas de amarres</label>
                                <input type="text" class="form-control" id="long1" placeholder="
                            ">
                            </div>
        
                            <div class="form-group col-3">
                                <label for="long2">Acero en viga de amarre</label>
                                <input type="text" class="form-control" id="long2" placeholder="
                            ">
                            </div>

                            <div class="form-group col-3">
                            <label for="long2">Rec muros</label>
                            <input type="text" class="form-control" id="long2" placeholder="
                        ">
                        </div>

                        <div class="form-group col-6">
                        <label for="long2">Rec zap y pl</label>
                        <input type="text" class="form-control" id="long2" placeholder="
                    ">
                    </div>
        
        
                            <div class="form-group col-12">
                                <label for="exampleFormControlTextarea1">Comentarios</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1 " rows="4"></textarea>
                            </div>
                        </div>
                    </div>
        
                </div>




















                
                <div class="row ">
        
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="biggerBox border">


                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="biggerBox border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             

                   


                    
                    
                        </div>
                    </div>
        
                </div>
    
        
             
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario De Supervicion Muros de Cisterna Y septicos</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             










                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>
            </form>`;
        }



        if (select.value == 11) {

            div.innerHTML =
                `  <form action="" id="form">

                <div class="row border">

                
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                
           
              
                        <h1>Formulario De Supervicion Losa Aligerdad y Macisas</h1>
        
                        
                </div>
                <div class="row ">
                    <div class="form-group 	col-6 border space">
                        <label for="nombre">Nombre del proyecto</label>
                        <input type="text" class="form-control" id="nombre" placeholder="
                ">
                    </div>
        
                    <div class="form-group col-6 border space">
                        <label for="fecha">Fecha</label>
                        <input type="date" class="form-control" id="fecha" placeholder="">
                        <label for="ejes">Ejes</label>
                        <input type="text" class="form-control" id="ejes" placeholder="
               ">
                    </div>
                  
                    <div class="form-group col-6 border space">
                        <label for="elemento">Elemento</label>
                        <input type="text" class="form-control" id="elemento" placeholder="">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" placeholder="
                ">
                    </div>
                    
                    <div class="form-group col-6 border space">
                        <label for="nivel">Nivel</label>
                        <input type="text" class="form-control" id="nivel" placeholder="">
                    </div>
        
                </div>
        
                <div class="row ">
        
                    <div class="form-group col-xl-6 border ">
        
                        <div class="row space box" id="camara">                       
                            <div class="form-group col-6 border" >

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                            <div class="form-group col-6 border">

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        
                            <div class="box  border" >

                            
                            
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        
                    
                    <div class="form-group col-xl-6 border ">
        
        
                        <div class="row space">
                            <div class="form-group col-3">
                                <label for="Espesorlosa">Espesor losa</label>
                                <input type="text" class="form-control" id="Espesorlosa" placeholder="
                             ">
                            </div>
                            <div class="form-group col-3">
                                <label for="acero">Acero en X </label>
                                <input type="text" class="form-control" id="acero" placeholder="
                            ">
                            </div>
                            <div class="form-group col-3">
                                <label for="acero1">Acero en Y</label>
                                <input type="text" class="form-control" id="acero1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-3">
                                <label for="acero2">Acero en apoyos</label>
                                <input type="text" class="form-control" id="acero2" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="a1">Ancho nervios </label>
                                <input type="text" class="form-control" id="a1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="a2">Sep-nervios</label>
                                <input type="text" class="form-control" id="a2" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="t1"> Espesor de topping
                                </label>
                                <input type="text" class="form-control" id="t1" placeholder="
                            ">
                            </div>

                            <div class="form-group col-4">
                                <label for="acero3">Acero en vuelos</label>
                                <input type="text" class="form-control" id="acero3" placeholder="
                            ">
                            </div>
        
                            <div class="form-group col-4">
                                <label for="p1">Espesor de vuelos </label>
                                <input type="text" class="form-control" id="p1" placeholder="
                            ">
                            </div>

                            <div class="form-group col-4">
                            <label for="a4">Acero topping</label>
                            <input type="text" class="form-control" id="a4" placeholder="
                        ">
                        </div>
        
        
                            <div class="form-group col-12">
                                <label for="exampleFormControlTextarea1">Comentarios</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1 " rows="8"></textarea>
                            </div>
                        </div>
                    </div>
        
                </div>




















                
                <div class="row ">
        
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="biggerBox border">


                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="biggerBox border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             



                    
                    
                        </div>
                    </div>
        
                </div>
    
        
               
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6qm7U8A58G/IOd+oeKwGlOl1c2tOf5251TeKo9rDFLz7Hf7Y/fdB4Li0v04q664HUTP3ioulU7taeCUgiIHucR16DwUw9rF/wDcb+NRY33JvsMn4J/Qq64/jhyfTnNqOJgdPTXV9VDy5hzASdvo3U55ZktBi1gq73XB8kNO32mx7FxJ5BV40+1jtGHQXmlq7PNVMudY+cbPA2Y7wKEpo0byf6qMEoZpXg1FG31WYdCzkD9I2W8qtmiOoNos2X3G1SvdS268zcdM1/dHITyBPuOysNd7tQWO2z3a5VDYaamYXveT4DwHmhDurhqqKkrYjBWU0U8Z5FsjA4fnUEWjWLU7NLxW02GWiglggPGxsrfabHvsCTusZLrtqbFeviAUdpkrO1EHCyMlpefDfdDMJOyLQ3Ar881EVA63VHM9pSO4OfUjuWqHTbVrC5OPC8tNfTA7imqX7cumx5LE5Rq9q1hskMN/oLRBLOOJkYaXO267Armj1T1jkxs5abZaGWwN4u2e3by7t0NmWh1tynGnil1BwqppyDsaiBpDSOu3d+dbxjuq2C5MGtoL5DHM7uhnPZv/ABFRPjmq+q2dunprTYrPWCBodK2WH2QD7yo/vtbVZHf/AIkbjVpp7k+bsQaAcAMnv3RMrjNc1zQ5rgQe4g7r6qkVF51R0mqIKGqvD4XOHG2lfL2o4epb4Bby7VPWKLGGZdPbbRHbHtDmzPbtxb8hsN+9Fyn5FX3FdWtYMz9ZNgtNrnFIAZSWcPDvvt3nyK6VLrnqfXX1mOUdFapq183YNayMlrneR3QyseirxlOserGH1DKO+0NohqJW8TY2sLnAdSAeSk3SfUiHUGyGWoEcVzpTw1MLeQ8nAdChnLekREUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEXTud3tlmpnVd1r4KWJo3LpXhv/wDVEOY+kjZrf2lHilGa+YchPJ7MQ8wO8oZwmSqq6WhgdU1lRHDEwbufI4NA/Gory/0iMWsnaUtgjddapvIOb7MQP4Xj9Cr/AJRnuVZhMZL5dpZWE7iFp4Y2+5oWvK4Zzlt+W6qZlmJdHcro+KlJ5U8HsM289u9agTvzKIqgiIqCIiAvrXOa4OadiDuD5r4iDKfVTkf/AByu6fZ3f4p9VOSf8drvy7v8Vi1kbFeBZK+OtdQU1YxpHHDUM4mvHiPJB8qcgvlZA6nqrtVyxP8AnMfK4tPvBWPU03286XZPpzcK2x2Kjtl5gDC6DbZ4O/MsPiFCykTkfWucxwe1xDgdwQeakuHNbvqY2zYjkV5gt1roWg1lQ9/D2wb3F3U7ch5qM13bKyCS70UVUxr4XzsbI13IFpcAQUG7V2QNxvK79ZMFrIIqO6cFHHVB+wZEANyHefPmshldNiWGY9YHY7eKO63anrTVVksb+IucANh+CDupoi0R01lhY/4gbs9odykPiF+xobpqO6wD8o5ZXCG6AWXI7RfM7zfIaSa9VVPI2honSc4ztyPD+gLE4hW/Vn8VYxkd/gtmPWf5SRsknB2xJ3I8yfzBTz9Y3TX/AIAPyjl9Oh2mp77APyjkMSgKpyT4lyLIcfw+ogp6O8zNpo6lr9mxwg94Ph71ksobimB0WNz4rdaO7XGiqXVNXMx2/HJty/mhTX9Y7TXbb4gH5QoNDtNR3WAflHIYlDVLTWC749fc4y/IaWpyC4QvNJSGTnF05e7uHgsfhtSzNn2qyZdfqe3Y7YmD5J8nD2x3328yevgFmNa9MbBh9da7laY5Ke31svYzsHtCMjxG/ktjk9G7GY7abo7KK4QNg7ffsm7cPDuqmEdSZDJRXm/4vi1ZBR0V7q2R+tCThayBu/j4A781lcpqcW0+mxaow64Ud1rLcZJ6mdjt+0lPdv5dAslolpZYcuNwvN7jkno6aUwQRb7B5+6JHQfpUsDQ7TUd1gH5RyLiUKmisNbiF+zHKcipK3JLjFxUtP2u7od3Dw67dw8Aurbrjb9P3Y9m+L3aKeSaMR3OhEntNPiCOhH51Of1jdNd9/iAflHJ9Y3TX/gA/KOUMS26wXuhyOz0t8tsnHTVbONh+nYj3ggj6FkF0bNZ7dj9sgs9ppxBSUwIjjHhuST+ckrvI0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/MjxFG6RwOzAXHbyVf8z9JKsbPNb8TtghEZdGaipG7twduTe78asCRvyKiTVjRCjylst9xtjKa6Nbu+EDaOo/wd5ok58FdL7k9/wAkqTVXu6T1bydwHvJaPcO4LFrs3C3V1qrJaC40slPUQu4XxvGxBXWW2YEREBERAREQEREBERAREQASO5ERB+jG8AEsdse47d657eD6/TeyT8swf/sFtOAahzYfOaetttNcbdNykhlia5zfNriNwVKfo601quvx9UTUVPKDVCSISRtLmNJJG3RTJym6g/aNN/7LP0BdhfAABsBsAvqy2IiICIiCO9eLL8cae1j2Rl0tE5tQ3yAPP8ywM+ZE+j+Lr2hM76T1InfmH/N/QpTvtvbdrNW214BFTA+PY93MKprbzO/FGaaNY4zG8k8Plvtt+NGZ2WE0QtDbRp1bRw7Oq+Kpf73H/ALfV07RRR2210lBE3hbBCyMD3BdxGhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQcVTU09HC+oqp2QxMG7nvcGgD3lRfmHpCYlYC+lsvFdapp2PZ8o2/wA7x+hbpnWIU+cY7PYaiqlp+0IeySM9zh3bjxHUKomY4TfcHujrbeqYt33MUrebJW9QUZmZhNM8WFa/2l81GI7Zk9NH3O73AeB+6b594UFZFjl2xa6zWe80roZ4TtzHJw8HA+IXXtd1uFlrorla6uSnqYHcTJGHYg/4Kd7HlOJ632ZuMZgyOhvsY+QqW7AyO6tP6Wq8Jyr6i2TOMDvuCXR9BdoHGIuPYVLR7EreoPXyWtqgiIqCIiAiIgIiICIiAiAb8gt/xHRjKsot8l2mEVromsLmTVfsB58Nh081M4GjUtHV10nY0VNLPJsTwxsLjt15KafRsxptVdKy/vr6iJ9Aey9XYdmSbj7brsu/orlOI2UVOI3CkoaS8AvjbWscHMqdt9hxeB/Ssn6OoInyff8A/NP6SpnKxympERRoREQEWCyHNsXxeKSW9XingdENzHx7yHps3vUT3XXS/ZTWm0af0ENMx27TW1rw0Dz58h9KJlL2R5PZsXt8tddq+CDgY5zGveAXkDuAVPmZZw503L5KOIgV3rRhaPZI4u5TLZtM8crq0XnUjO6e8VpcHuhFUOyB6E78/o2WyR4FonFcW3GP4tD2O4hH6yOz3/B3RJ3brjWYY9llGyrslzhn4mhzo2u9tnkW94WaUI5Hpph5rXXrAs0pbHcN+NrG1IERP4+S4LVrbfsOrBZNQqaKuaNgyuopA/cdTtyci5Tqiw+PZbjuU07aix3WCpDm8RY13tt97e8LMIoiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLBZfjGO5TaZKDI4IXQ7EtleQ0xO+6a49xXBqBf71jOMVN3sFpNwqodvkxueFvi8gd+yqblGomX5dK43q7zOi33EDDwRt/mhEmXd1C00u+C1vGT63bJ+dPWRjdjh0O3cVqEUssErJ4JHMkY4Oa5p2II8Qt/wHVGSyU78ZyuF10x6qBjkhf7Tod/tmb/AKF+890uba6NuV4bUm6Y9UN4xKw8T4PJ/wDirllt+Eam2HPLSMH1QbHI92zaatfy3PhufB3mtF1K0rvGBVRqWg1VpmcewqWc9h4B3QrRe7mDzUt6b6yCkpW4hncYr7NOOxbLKOJ0LTy2O/e39CcHxRIilTU3Rt9hgGTYg91xskw7Q8HtmEHnvuO9vmorVBERUEREBEXLTU1RWzspqWF80sh4WsY0kkoOJZzF8MyPMawUVht0k532fIRtGwdXO8FIuM6JUlroRkuptyjtlCwB/q3HtI/yPT3d648n1vjoaJ2O6aWyO0W9oLPWAzaV46jp7+9ZyY82ZpsX030fpm3DLaqO9X4N4o6RmxYx3hy8PefxKPs51XybN5XQzTmjtwPydHCdmADr1WnVFTUVcz6iqmfLLIeJz3u3JPvKymNYlfsur22+x2+Sd5PtOA2YwdSe4JjAxDXOa4OYSHDuIPPdT56ME9xMl4i9XaaQ8L3zE+12nRatpxaMYxbL6mxaj2sw17AW0kk5+RDtuW/XfwK330dNu1yYN22Fadtu7bc9ySscpqREUaEREEYZvoZa81yGe/1N5qIHzNa0xtaCBsNlgh6MdlbybkdWN+/ZgU2IiYhCf+jHZv3x1n9AJ/ox2b98dZ/QCmxEMQhP/Rjs3746z+gEPox2Vw2dkdWQOrApsRDEI8070ft+nt0nudJdJ6l08PZFj27Ac991IaIiiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD4QHAggEHlzUH6t6FMuRkyHC6ZkVRzfUUY5CXzZ0PkpxRDlQeaGamlfBUROjkjPC9rhsWnoQtswDUa64PVuiDRV2up9mqopObHtPftv3HZT7qrozbc0hku9oaykvDGHm0bMqNvB3n5qr10tNxsldLbbrSSU1TCdnxyDYj/ELXLE7JKzLTuz5Ba353pk/1igI4qu3gfK0zvHZvTyUVuaWkhwII5EHwWdw/Nb7hFzbcrLUlu+wlhdzjlb0cFI94xXG9XLdNlOCNbR31jeOttRIAe7xcz3qcDX9L9XK/CZfiu6NdW2Sb2ZIHczFv3lu/5wtm1B0ltl8tpzrTOSOoopGGWakjO5HUtHh5tUM1NPUUk8lLVQvimicWvY8bFpHgQto0+1Iven9yE9E8zUcpHrFK4+y8dR0Pmg1NzXMcWvaQ4ciCOYK+KfMpwPGtW7S/NdPpWQ3EN3qaI7N4n+II8HefcVBVbRVduqpKKup3wTwu4Xxvbs5pVicjgRZKw47esmrmW+yW+WqmedtmN5N8ye4KX6HTzA9LKWO9ajXCO4XLh44rbFzHF3jl4/TyTI0TCNJsozV7KiGn9TtwPt1c44WgeOw8VIFTlGnOjcBt+JU0V7vuxbLVvO7Y3e/3+AWm51rPkOVMfa7Zta7SPZZTweyS0d3ER+gclHhJJJJ3JUxkZnJ8vyDL651ffbhJO4ndrN9mMHRrfBYiGGaokbBTxPkkedmsY3ck+QC2/BdLMozqdrqKmNPRAjtKuYbMA8up9ynCismmOh1uFbcp46m6FvJzwHzSHoxv2oTOCIaFp/6PlzuvZ3XMnut9EBx+rg7SvHmftQtzyXVfBtMKB2OYVQQVNXENuGL7G13V7vtiox1A1xyXMO0oKAm22127TFG725B9879QUbc3HYAkk/SSmMmfJs2V6g37NS03/wBWlkjdvFK2MNdGCfm7jvCmD0X/ANoXnx+VZz68lC9px2OO7UVPl/rVooatvGJ3wnct8CAVNvo1RxQx5BFTv44mVIbG7q0b7FCOU3oiKNiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIuGSspIZmU8tTEyWT5jHPAc73DxQcy0nUfS6y5/QOMsbYLnEzaCqA5g9HdQt2RBRzKcUvWHXWS0XukMUrPmu72yN+6afELq2a9XPH7jDdbTVvp6mBwcx7T+Y9Qrm5lhNjzi1Ptd5pwT3xTNA7SJ3Vp/Uqo6g6cXvALo+nrIXy0T3f6vVtb7Dx0PQ+S1liYw317cZ1zoGmIU1ozGFoLgfZjrAP1/nUR3qy3PHrjLa7vSSU1TC4tc142+kdR5rrU1TUUdRHVUkz4poncTHsOzmnyKmCy5VjurtvixXPHso73E3hoboNh2jvBr1ODlGmKZde8Nusd1slW6J7T7ce/sSN+5cPEKbzJpfrVbBe7xM2zXShaH1pa4NcWjv5n5zfPvUJZdh18wq6Ptd6pXRu3JikHNkrfumlYUOe0ENcQHDYgHvCuMkJmvmsNgxGhdjmlNsigYBwvr3s3c89RvzPvKiG43K4XerfX3OslqZ5Du6SRxJK6zWue4Ma0ucTsAOZKlbTzQW+5MWXLIg+2W7k4NcPlZR5Dw95Tg3lG1nsd2yCuZb7PQy1U8h2DI277eZ6BTtheg1mx2AZBqJW07uzHH6uX8MTPH2j9sfJZq85vpxo3QOs+N0UNTcWjhdHEQXE9ZH/AKlBOa6jZPnVT2t4rCIGkmOmj5Rs+jx95U5XaErZx6QVFbYH2LT2kja2McAqywBjfwG/rKgu5XO4XerfXXOslqZ5Du6SR25K4qWlqa2dlLRwSTTSHZjGNJcT5AKbdPfR2qq0R3XNnup4Ts5tGw+24ffHw/SrwmJlFGMYbkOXVRpbJQPlDGl0kpG0bAO8l3cuK0dtbL0wiqipuymMRqZIu0Ywg9+xV0Kay2qw2WW3WehipaeOFwDI27eB5nqVCGjmH2TNLFlFpvdMHsNeDHIOT43bO5tKmVw57zpZqPm9qgmuOa2u40bW9rBI2PkG7eBA5Bd30Z4XU0F+pnkF0NQIyR4kbhYegu+UaFXh+PX5sldjdYXCnmHczfxafA9WrOejhJHM7I5oXcUclXxMPUEnYoRymxERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBEOt2pOYYY+Ohsdt7GmqIx/6i5vEA877tHgD3d/VV1rsmyC5XAXSuu9VLVNdxNlMp3afLors3qyWvIbdLarxRsqaWYbOY8fnHQqrWqekF0waqkuNvY+qs0j/YkA3dFv9q//ABVhmrzSPpJrpBdWwY3mE4jreTIKx3Js3QO6O8/FTYCCNwdwVQYEtIc0kEHcEKbdI9c5LV2ON5jO6Sk5Mgq3c3RdA7qPPwSYInzWNXQvdjtWR26W1XijZU00w2cxw/OOhXbgnhqYWVFPI2SKRocx7TuHA9xBXIo0qTqnpBdMDndcaPiqrPI/ZkoHtRb9zX/4qO2lzXBzSQQdwQeYKvpV0lLXU76SsgZNDIOF7Ht3aR7lW7VvQ+ox90mQYnBJPb3EvmpwN3QeY6t/QrEszGHSxHUayZJao8I1Pj9YpfmUdxP2SmPcNz37ea46v0esxddGw2eSlrbbMQ6KuEoDSw+JCizbbkt/wvWbKsMtVRaKaRtVC5m1MJjuKd3UeXkmE+KXbJgGnWj1vbe8qrYamvA3D5QDz6RsUeaha+XzJO0tmNh9stxBaXg/LSDzP2o9yje+5Deckrn3G918tVO/7Z7twPIDwX6sGN3vKK5lusdvlqpnd/AOTR1J7gFcGfJjnvfK8vke5znHcuJ3JK3bAtI8ozqRs0MJo7fv7VVM0gH8EfbKXtPvR6tNnEV0y5za+sGzxTj7DGeh+6P5lMUUMVPE2GCNscbBs1rRsAPIKTK4zy1LBtL8YwWnb6hSNnrdvlKuUbvJ8ug9y3BEUacNYxz6SdjG7udG4AdTsqaSRZPjt0nbVTXKz0c9YWTSMDmgHc8+Xedt1ca5XS32ejkr7pWRU0EQ3dJI7YBV51Y1vt2R0s+OY/bIaijkG0lVUM9onqweHvRmpl4dFxl1mjuMGpVVc7e9vaRl4LgCB0J5Fdv0aoPVY8gpQ7iENSIw7rtuN1FOmuplzwKuezd1Ra6kFtRTF3LmPnN6FSx6NszKkZFUxb8EtVxt379iSQqRym1ERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBoea6y4hhcklHNUmsr4+RpoOZa7o49wUY0vpKT1t2fBfsfp32Wcdm+JvtPa0+J37/cs/rFokb4+fKcVZtXO3kqqYn7N5t++8lXKWKWCV8E8bo5GHhc1w2II8CFYjLM5SzqBpHRy20Ztp3Ka+1VG8slPH7ToAefLx2HTwUSEEEgjYhbdp7qTesBuAkpnmeglP8ArFI8+y8eJHQqQcv07sGotqOb6YGPtSC+roPmu4u87N8HeXimcJ8GvaVaz3HC5o7VeXy1dncduHfd8Hm3y8lZ+z3i2363xXS01cdTTTN4mPYd/o8iqKTRS08r4Z43RyMPC5rhsQehW3adal3rT+5CWleZqCVw9YpXH2XDq3oUmFicLlL8ua17SxwBDhsQRyIWHxTLrHmVrZdbHVtljd89hPtxu+5cPArNKNIJ1Y0GbVGXIcKgayX2pKiiB2DvElnn5Kv5pagVBpDBJ23FwGPhPFxdNlfZYb6jsY+OjkXxJSm4Ebdvwc/f0381YnCYV80/9H2838R3LKHPttEdnCHb5aQe77UKwuOYrYsToW2+x2+OmjHeQPaeepPeVl0UIjAiLA5Xm2OYZRGtvtwZFyPBEDvJIegais6SGglxAA7yo01A1yxvD+Ogtrm3S4jcGON3sRn7536gof1B11yHLTLbrQXWy2uO3Cx3ysg++d4b9AoxJLjudySfxqxDOWxZhn2S5tVmovde98YcTHA07RxjoAteDHuBLWkho3JA7lIGAaM5PmskdXNC6gthO7qiVuxcPvB4qQ6ODSrSE3Gx3m6NvL7k9rHxtpw98Ee22ziD/wDNkzhN/FrWl2i1py6yyZBd7018PC4Np6Vw42OA+3Ph7ltvo2Qspm5FTRklkVV2bd+/YEgLTaytotLr3Hk2n2QwXGy144ZqIybuaCPmuH6D3rcvRrnFUzIapreET1QkA6A7nZFjlNyIijQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIuvcK2G2UFTcqgOMVLC+eThG54WtJOw67BB2FGGqei9szWN92tAZR3djTzDdmT9A7z81oWZeknc6vtaLEqEUkR9kVM3OT3gdwWK0615vthuHquVVMlxt07/bkfzkh3+2b1HkjMzHCMbtaLlYq+W2XWkkpqmE7PjeNj7/ADCyOI5nfMKujLpZaosII7SI/Mlb9y4Kz2Z4NiurePx3KgnhdUuj4qSui57feu27x5HuVXcrxO9YbdpLRe6Yxyt5seObJG9WnxWs5ZmMJhudjxPXS1SX3GeC25LTR71FKdgJj59fJ341CF0tVwstdLbbpSSU1TC7hfHINiF+7Le7pj1xiutorJKaphO7XsP5j1Cm+kuWI682gW27tgtuWQR7QzDkJdunUHxHf0U4XlEGHZpfMIurLpZqjhO+0sTubJW9HBWu091JsmoFtE9HI2GtjA7ekcfaYeo6jzVTMqxO9YddpLRe6UxSt5tcObZG/dNPiF1bLe7pjtyhutoq301TA7ia5p/MeoVxkicL2Io50v1htOd07LfXOjo7wxo44idmzebP8FIyy2Lhq6yload9VWVEcEMY3fI9wDQPetLzvV7FcIa+nlqRWXAD2aWE7kH749w/Sq2ZvqdlGdVBNyrDFSAns6WI8MbR59fpRJnCW9QPSLpaN0tswqJtTKBwmtePYafvR4qA7verpfq6S5XetlqqiU7ue87/AIugXVhhmqJWwQRukkeeFrGjck+QUv4HoBcLhE285rL8W0DBxmEkCRzfvj9qFrhmd0a41iV+y2vZb7Fb5Kh7jsXgbMYOrndwU52LSrBNMaBuQagXGnq6tg4mxP8AmNd0a3veV+cl1jw/AKB2O6dW+nmnjBYZmt+SYe7cnveVBOQZLe8or3XG+XCWqmd3Fx5NHQDuAU5NoSTn2v8Ad74yS04pG612/bh7QcpXt+j5o9yiWSR8r3Syvc97ju5zjuSeq5qOgqq5zvV4nFrOb37eywdSfBSLpDa9ODUVVyzm5QiSllDKenkJ7OQbHdx271eDeWM0s0/ueY3N1UylhfbaT9tuldy227gO/dSr6OEUcDskhhaWxx1nCwHwaCdgtJyC42jT3JPqq00yWnqqOqcRUUAJ2aD3gg97enRbL6OmR2llXdqSrrIoKy51PaQQE83d5Oyiwn1ERRoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBflzWvaWPaHNcNiCNwR0X6RBBurmhcVayoybD4OGp+yT0TAOF/Us6HyVeZYZaeV8E8bo5GEtcxw2IPQhX4UWaq6K2/MmPvFjbHR3cc3HuZUeTuh81YnCTCCtOdTr3p/Xh0Ejqi3SuHb0rj7J829CrIT02Ea0YsHgxzse3ZsgA7amf06g/mKqPdLXX2avmtlzpnwVMDix7HjYgrKYbmt8we6sulmqC3wlhd8yVvQj9aYZiccu/qFpvfMAuboKyJ0tC93+r1bW+w8dD0PktWpqqooqhlVSTPhmidxMex2zmnqCrc43lOH6yY3JQ1UEb3uaBVUch9uN33TfLoQoI1S0dumCzPuVBxVdne/ZkoG7ot/B/+KRJjDa8Wz3HdU7Y3C9SGxxV2wbSXEbNcXeG58HfmKjrUHTi9YFc3QVcTpqF5/1era32HjwG/gfJamCQQ5pIIO4IUv4Dqtb7lbBgmpMTay2TARw1cnN0XTiPfsOveE4ESU1TUUc8dVSTPimicHMew7OaR4gqRLnr3nNwx+GyNqWU8rWlk1ZH9llH6j5hdfUvSe44W/41tr/XrHUHeCpZ7RYDzAdt+ladZbDdsiro7bZqCWqqJDsGsbvt5k+AV5N3SlllnkdNNI6R7zu5zjuSepK3HBNKMozqdr6SmNNQ7+3VzAhg933X0KTcW0SxvDqAZLqXcYHGIB/q5dtGw9+x8XHyCxOdekFLNA6x4DTCgpGjgFTwBri37xvc0KZMebamU2leh1F2tQ9lyvYbyHJ8xd5DuYPeojzvV7Ks5c6nmqPU6DflTQOIB/CPef0LS6mpqKyd9TVTySyyHic97i5zj5lbHhWnOTZ1VCK0UZbTtPylTICI2D3+J8gmMDWWRvle2ONpe5x2DQNySpZ080AveRiO55KX2yhJBEZHy0g932o96lvBNG8VwSNtwqwyur2N3fUzgcMfXhB5D3rC6hekFZrA6S24s1lyrmnhdKfsMZ9/2xSZXHm2S7Y5plhmH1FnusFLR22WPaXiPyspHjv3ucqnXz4mF1qBYHVBoOM9iZwA/h89lzZDlF9yqtdcL7cJamUklocfZZ5NHcFilYhORZjEsgfi2QUl+jpmzupHcYjcdgVh0QXE0p1Aq9Q7PVXSqt8dIYJzE1rHFwI2335rd1R+x5rlON0z6Ox3mejhkdxuZGRsXdeasjoFld0yfFqk3qukqqqnqnN7R/fwEDYfpWVicpPRERoREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBpOpGl1l1AoT2rG01xiB7GqY0b7/cu6hVRybF71iN0ktV6pHwysJ4XEezIPumnxCvItdzXBbFnVtNvvNOC5oJhmbyfE7bvB/UiTGVNbJfbrjlxiutmrJKapiO7XsPeOh6hWi021VsWo9u+JrwyCK5lnBNTSbFk425lu/f7lXjPtO77p/cvVLnH2lNKSaepYPYkb+o+S1qlq6mhqY6ujnfDNC4PY9h2c0jxBWuUjZMGreh1RYXyZBiUElRQOcXTUzRu6Dx3HVv6FDfdyIVltJ9cKXI2xY7lsscNwI4I6h2wZUeR6O/SsdqzoSysEuR4VA1s3OSejbyD/EuZ5+SkSY8mh6Z6u1OLt+p7JI/jGwz+w6KQcRhB8W7948lIt71S0403t7qPALbS1NbUt7QGEew3fxe7vP4KrlLFJDI6KVjmPYS1zXDYg9CvyBudgNyVcGWdyrNcjzKtdW324STc/YiB2jYOgb3LGW22XC71bKG2UctTPIdmxxtJJW/4Bohk2YiOvrWm221x37WVvtvH3rf1qwVkxbBtLLO+pjbBSMjbvNVzkdo/6f1BTOEiM8o10+9HONgiumcScTt+JtDGeX8936gpHyjOcL0xtrKWUxROY35GhpgOM9OQ7h5lRbqB6Rk1Q2W2YRG6Fh9k10g2efwW+HvUIVtdWXGpkrK6plnnkJL5JHcTifeUwuYjhu2e6x5Rm0klMJ3UNtJ9mmidtuPvj4laEtkw7T7Js3qxT2WhcYgfbqJBwxMHmVYfENAcNsVFtfKZl3q3gcb5h7DfwW+CZwbyqoiuV9aDTb96VD/QKfWg02/elQ/0CmTCmqK5X1oNNv3pUP8AQKfWg02/elQ/0CmTCmqnb0XrpwVt5tL3/PjjmYN+hIOw/EpU+tBpt+9Kh/oFZOw4LieMVD6uw2Omo5pG8Dnxt2JHRJnK4Z5ERRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBjb9YLTkttltN5o2VFPMNiHDm09QfAqreqGkN2wSqfW0LJKuzvO7Zw3nF96/p71bZcFZR0twpZaKtgZNBO0skjeNw5p7wUSYyoY1zmkOaSCOYIPcVOWkWuj6Iw43mlSX052ZT1ruZZ0a/y81jtWtD6jG+1yDFY3z2we1LTjm+DzHVv6FDpG3IrXKcLU6maM2jO4xerBJBSXJzQe0b9iqB4F23j5r5p9oTj2JtjuN94LlcW+1u8fJRHyB7/eVFOlmtlwwsttF8MlZaD83nvJB+Dv3jyXHqDrrkWW9rbrSXWy2uJHDG75SRv3zv1BZMxyl7UDXHG8Pa+22fguVxbu3s4nfJxH74j9AVcsszjI80rDV3y4PkAJ4Im8o2DoAsCSSdzuSSpE0/0VybNHsrKqJ1utp5meVvtPH3rfFXGEnMtCobfXXSqjobfSyVE8pDWRxt3JKnXTv0dj7F1zp23c5lFGf+s/qUr4bp3jGD0wis9C0zkbPqZBvI/6fD3BbOkysUurbrbQWmkjobZSRU1PGNmRxt2AC7SIo0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/L2NkaWPaHNcNiCNwQoI1e0MM5qMnw2D5Q+3PQsGwPVzPPyU8ohMZUGkjkhe6KVjmPYSHNcNiD0IWWxnEb/l1c232K3yTvJ9pwGzGDq53cFZnN9DsezG9QXqOdtveHcVUyODiFT7zxDhPnsVvFix6z43QMt1loIqaFg22Y3Yu8ye8q5ZwjnT3QOxYyI7jkXBc7gNnBrh8lEfIeP0qVmtaxoYxoa0DYADYAL9Io1wIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg6F+unxJY7jeuw7b1Ckmquy4uHj4GF3Dvsdt9tt9iqNfspn8Rf9p/8AKK+iLt22toaUT67T7/zmMfJ0by3utaY+z63q8c+zFWfnwoX+ymfxF/2n/wAon7KZ/EX/AGn/AMoqb6u/72M1/lFcv+5kVt/guv8AaDUH/k7f/wBcy+mubCxtrebj1WcY27p8ce98VZdV6neXkWvrsZmYz20zxnwx7vNMHo6+m/8AX+1FbgH1sPiLioZ6z1v469a+x8Ps8HYM7+Lv4vDuU0636rW/RTTK8aj3C3/GAtgibDRCcQmplkkbG1gfwu25u3J4TsATtyW+KlPwjuT1t2jwLRWyPLq3ILkK2WIeJBEFODtzIc+WT6WDv5beBoaeje3dNGnR20+MZmeN53fVXOrcdNsK69XU76/CcRG87RtG20sD+ymfxF/2n/yiu5h+S0GZ4pZsutbgaO9UEFfBz32ZLGHgHu5gO2PILxBySx1mL5FdMZuI2q7TWz0M4222kieWO5e9pXqB8H7nYy/0faKy1FT2lZi1bPa5ARs4RE9rEfdwycI/AXp9Y6boW+hGtb04333mdp+P+bvG9H+sXV3c1W93VnbbaI3jniI/yEhekfrj/o+6ex559S/x/wAdxhoPVPXfVdu0a93Hx9m/u4O7h8e9Vf8A2Uz+Iv8AtP8A5RSb8I/+56g/lFR/3cy8vlvpHTra6t/WatOZzPjP7S4uv9XvbG79VoV4pxHhE/WHo7kXp66o4hbjd8t9EPKbJQB7YzVXGvqKaEOPc3jkoQ3c9N139P8A4SXSjJK6ntua4xd8VfUFrDVdo2spInEke29obIG93MRnvO+225tNlVjtOTY3dMev8EU1uuNHLTVTJWhzTG5pDtweXIHf6F4WrHTrWz6lRVE6fbMY4mfH4/BydXvuodH1KJjV74qztNMRxjyx5vcLM82o8X04vuo9uZDd6W02SpvcDIagCOsjigdM0NlAcA14aNngOGx32Kpj+ymfxF/2n/yi2vQK73a6/B6Zc26SySNoceySjpXvduewbTzFoB6Auc0dA0DwXnE5j2BrnNcA8cTSRtuNyNx15gj6Ct9N6Xb6lWrRrR3TTVjmY+ksdZ63d6VOjqW1XbFdOZjET9Yeyvo6a5UHpBadtzqksos80dbNQVVB636z2EjOFw+U4Gb7sex3zRtxbc9t1mdaNUKHRrTO+aj3Cg9eZaImOjpBN2RqJXyNjZGH8LuHdzxueE7Dc7HZUt+DHz0UmTZbprVT7MuNJFd6RhOwEkLuzlA6lzZIz7oz0K3b4S/N5qfEcS0wtrnPqb7cH3CeKPfidHCOCNhHiHSTbgdYl0NTp1MdSi2iPZmc/lz/ANPU0urVVdHm8mfbiMf1ZxG3ylr/AOymfxF/2n/yitJp/rZ9XOgTdcfqZ9S4rXX3L4r9d7T9rOmbwdt2bfndj38HLi7jtz8Z16k6AfuBYv5L37+8q13+rdOtrbToq0qcTNURzPG/nLy+hdXvb3W1KNevMRRMxtEb5jyhFX7KZ/EX/af/ACitloLqz9e/S606k/EHxL8aPqWepetes9n2U74t+04Gb78G/wA0bb7c+9eLK9ZvQL/cuYn/AO9cf++nWes9PtrW3ivRpxOccz5T5y16O9WvL+6q07ivMRTM8RG+Y8ohI2t+q1v0U0yvGo9wt/xgLYImw0QnEJqZZJGxtYH8LtubtyeE7AE7clUf9lM/iL/tP/lFnvhHcnrbtHgWitkeXVuQXIVssQ8SCIKcHbmQ58sn0sHfy28/8ksdZi+RXTGbiNqu01s9DONttpInljuXvaVvpPTLbXt4r16czOZjeY248J82Ou9avLa6nTtqsU04idonfnxifB7fYfktBmeKWbLrW4GjvVBBXwc99mSxh4B7uYDtjyCzCrT8H7nYy/0faKy1FT2lZi1bPa5ARs4RE9rEfdwycI/AVll87daM2+tVpeUvrbK4i6t6NaPxRE/3/UREXA7QiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPEPV3/exmv8AKK5f9zIrb/Bdf7Qag/8AJ2//AK5lUjV3/exmv8orl/3Mitv8F1/tBqD/AMnb/wDrmX3XU/8AbqvhH1h+YdF/3ej41fSXoKqHWmQ66fCJ1Nwa41Fo0/a5rHN9prfU28A5937blc4f/Crl6lZlS6eaf5FnFXwllkttRWhru6R7GEsZ73O4W+8rzb9EP0l9NtCazLMh1CteTXS+ZHLEGz26ngla2Jpe+TiMk0Z4nPeCdgfmhfPdM0NSrR1tXTjM47Y/Pn5Q+t61c6VNxoaGtVinPdP9PHzlgvTqwd2Fekbf5mRcFLkUcN7p9htv2reGU/lo5T9IUk/Bn538U6j5Hp/U1BbDkFubW07DzBqKZ3cOhMcsh6bM9y0b0yfSF0x9IWuxm9YRZ8ioa+0RVNLWG6U0EbZYXljow0xzPO7XCTvA+eow9H3O/raa1Yfmb5hFT0N0ijq3k7BtLLvFOfycj19D6nUuOm+q1YxV24/OOPpD5L7TpWvWPX6NWaO7OY8quflmV/8A4R/9z1B/KKj/ALuZeXy9QfhH/wBz1B/KKj/u5l5fLj6B/CfnLm9Kv4/+mP3X41o9NDXc6d3WgPo1ZJgYuERo33u6CqfHAyQFruDjpomiQg+y4uOx57FVM0WwTTbOsmp7fqXqtR4bb3ScJdJSyySTAbHYScPYxb7kB73bDhO4+aHezVwoKG60FRbLnSQ1VJVxOgngmYHsljcNnNc08iCCQQvE3VvGKLC9U8vxG2gijs19rqGmBJJEMc72sBJ578IC6/RtfT16K9LSp9XPOY3+uXb9IbbWtdTT19ev1scYmMf+uOXq7n+KYtg/oqZfimFQxx2O34PdWUXZydoHxmjld2nGPnF5cXl3iXE+K8z8nwMO9GvCdTaaEbx3652Ksk25kENmpx9G1R+NWB9E/US+ZB6Kmt+n12qpKilxjGK6otznuLjFFU0dVxxDo0Pi4gOsjvJdzSXAnah/B4ZXaKeAy1lDcK27Uga3id2lMY5SGjxLmNez+euO27unVVRXOcVxmfOJid/1y5bzs6vTRVp04zpVTEeU0zG0fLCtPox579bbXfDsolmMdK24soqw+Ap6gGGQkeIAk4ve0KyWorjrb6b96gdxzWrTqyVZ27w11JTvdv0BFXMPP2fxUdBLSCCQQdwQr2+gfitbXad6t6uXmWSorLxBUW1lRL8+R7YXz1DyfHidLFz6tP0eh1KinRzdfix2/OY/7eT0bUruJpsfw93fP5RO357KIr1J0A/cCxfyXv395Vry2XqToB+4Fi/kvfv7yrXF13/w6f8Ayj6S5vRj+I1f+E/WHlsvWb0C/wBy5if/AL1x/wC+nXkyvUD0VsypdPPQdps4q+EssdHea0Ncfsj2VVQWM97ncLfpU6/TNdtTTTzNUfSWvRWuNO8rqq4iifrCNrTIddPhE6m4Ncai0aftc1jm+01vqbeAc+79tyucP/hUE+nVg7sK9I2/zMi4KXIo4b3T7DbftW8Mp/LRyn6Qs76IfpL6baE1mWZDqFa8mul8yOWINnt1PBK1sTS98nEZJozxOe8E7A/NC6Xpk+kLpj6QtdjN6wiz5FQ19oiqaWsN0poI2ywvLHRhpjmed2uEneB89XQ0tfQvaaYpn1cU9ufDzz8y617a56bVXVXHraq5rx47zjHy3bz8GfnfxTqPken9TUFsOQW5tbTsPMGopndw6ExyyHpsz3L0eXiz6Pud/W01qw/M3zCKnobpFHVvJ2DaWXeKc/k5Hr2mXj+kGh6u5jUj8UfrG39nv+ilz62znSnmif0nf65ERF4T6gREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHiHq7/AL2M1/lFcv8AuZFbf4Lr/aDUH/k7f/1zK5lXoZoncKuevr9HsIqampkdNNPNj1I+SWRx3c9zjHu5xJJJPMkrL4tp3gGDyVE2FYNj1gfWNa2oda7ZDSGYN3LQ8xtHEBudt+7cr6C76zp3FrOhFMxMxH6YfJWPo7q2l7F1NcTETM4+MT/dXH4RzPvqa0Vo8Nppyypy25Mie0O2JpafaWQ9T8p2AP4X0Hc9AvRp0rsejWI0WYaW4pdb3JbI6qvqrjZqapqDNNvK5jpHsLncBk4Bz5BoA5KXco0+wHN5KabNMHsF/fRhwpnXS2Q1RhDtuLgMjTw78Ld9u/YdFnwA0AAAAcgAvMm8mm2p0NPMTEzMz5+X6Pajp/deV3WriYmIiIxxHM/qrh6T/o4aX1+hOXTYZpfjFpvVuojcqSqtdnp6acdg4SPaHRsBIdG17dt+e/XZeU69454IKuCSlqoY5oZmGOSORoc17SNi0g8iCNxstH+sBoP/AAJ4F/Vuj/8AGu/07rH2PTmjViat88vL6v6Pf6hq06mjMU4jE7f2VN9JLOxqR6BmD5bJUNmqaiut0FY4HvqYYp4piem743H6R71QZe379LNMn44zD36c4w6wxz+sstZtFOaNs3P5QQ8HAHcz7W2/MrF/WA0H/gTwL+rdH/41zWfWdK0oqoiicTMzHwlwdQ9Hde/1KdSdSMxTETzzHiizJ/hAPRtsllqLhY8qrMhro2nsbfS2uqhfK7Y7AvnjYxrd9gTuSN9wD3LzCya+3fPszumSVUDprnkVymrHwwtLi6eeUu4GNHM+07YD3BeyH1gNB/4E8C/q3R/+NZrG9OtPsNeZMQwTHrG8uLi622uCmJJGxPybRz25e5cVp1K1sIqnRomZnzmP2hz9Q6Pe9UmmLjVpimP5Yn95/dUPQjQjJdIPRK1dv+a259uveV4zcpPUpW7TU1LDQz9kJB9q9zpJCW94HDvz3A334PGGKo9G4U88TZIpbzXMexw3DmkMBBHQhWZuFvoLtQVNqutDBW0VbC+nqaaoibJFNE9pa9j2OBDmuaSCCNiCV08cxbGcPtos+JY5a7JQB7pRS26jjpoeN3e7gjAbudhudvBdPW6hNxp101x7VVUT8oxh6Ft0qm11dOrTn2aKZp985nOXizq1hMum+pmT4NKCBZrnPTQknfihDiYnfSwtP0r1A0HwV2nvoi2+y1FN2NXU45V3OrB+cZamN82zvNrXtb/NCky+6P6S5PdZ77kuluI3a5VXD29ZXWSmqJ5eFoa3ikewuds1rQNzyAA8FtDqKjfRm3PpIXUrouxMBjBjMe23Bw93Dty2222XYvurfbNKjTxjG8++XT6Z0H/T9fU1e7MVRMR7omf/AI8Hl6k6AfuBYv5L37+8q1MX1gNB/wCBPAv6t0f/AI1tFvxbGLTYPqUtWOWuisgikg+LaejjjpezkJL2dk0BnC7iduNtjxHfvXL1Dq9F5RTTTTMYmJ+rh6T6P6vTtSuuquJ7qZj54/s8LFbbKc/+pr4PPCMMppuCpy28V0T2h2xNLT100sh8/lOwH876DfX6wGg/8CeBf1bo/wDxruVOjmkVbb6G0VmleHz0Nr7T1GllsdK6Gl7R3FJ2TCzhZxO9p3CBueZXPr9c0deaM0T7M5+UT+7q2vozcWsamNSM1UzTxPjMZ/SJRnoF6NOldj0axGizDS3FLre5LZHVV9VcbNTVNQZpt5XMdI9hc7gMnAOfINAHJYz0n/Rw0vr9CcumwzS/GLTerdRG5UlVa7PT0047Bwke0OjYCQ6Nr27b89+uyseAGgAAADkAFxzwQVcElLVQxzQzMMckcjQ5r2kbFpB5EEbjZeLF7rRreu7p5zz78vpKum282/2ftjGMZxHljLwcXs/6OWd/XI0Qw7LX1DZqmotkUFY4HvqYfkpiem743H6R713PrAaD/wACeBf1bo//ABracexjGsQtrbLiePWyy29j3SNpLdSR00Ic75zgyMBu58Tsu/1Pqenf6dNNNMxMS8rovRdbpWrVVVXExVHEZ/zzZREReK+kEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBQpnGoWZ2pmsotd57B2K2ehqbOTTRP9Vmkp5HvdsW+3u5rTs/ccuWymta3ctPMPu/1Q/GFn7b6q6eKlu/8ArErfWYo2FjG8nDg2a5w3Zwk7812rXV0tKqZ1acxt4RP4omefdEx+eHTvdHW1qIp0asTv4zHNNURx75ifyzyjlmreTMyDFcAyERWfLWZBHRXimjja6C50Bo6p7aulLwSYXyRRk7bPjcCxx+6+T3nJKuLI8jueqGb2umpMhrLRSUWP4/S3FkTIh7BcxtvqJwPZJc9x4dyBuN2hSjeMOxnILvZ7/ebNBU3KwTvqLbVHcSUz3MLHcLgQSC0ndp3aeR23AIwVZo/hVbX11x7TJaSS5TvqaqO35VdKKCSV23E/sYKhkYJ257NG55nmu1Tc2u0zRjbfaJ3zvjPhj84497p12l5iYivu32zVVG2IiM9vjnOeInnadkc3/N9Qbh9aijx7Ib/cPqlxirulxnxamtkctdLHHQFk7BdWNZHETUSO4dmv9toLeWwz2oFw1QxCx4TRYfklVdb5eMjEMzMhio2uqIBb6uodRyOpYmRx7up2tEjASHc93N3B2y5aR4Lc6awUrqG40TcXon260utl5raCSmpnNia6IPp5WOc0iCLk4n5g813qLT/GaGK2QllzrDZrg66UMlxu9ZWyxVLoZIC7tJ5XvcOzlkaGElo4iQAdik3dtEU9tHHd+GN8zVjM58Mx4Rx8EiyupmvurnftxiqdsRTnEY8cTvmeffLQrJrDPmF8vAsdTUUMduxaWqqrXVQMbU266RzPa+OYEEh7QG8ty1w2cNw4E6/V53qRdsY0cfbbrkktbleOm43Y2CC0tq6mYUdNJxj19ogY3jkeSG8J5gActhMcmC4k+/XLJ/iSBt0vFC2219UwuY+pp278LX8JAJG5Ad87bYb7AAYyu0kwavtuPWk0VypIMVpfUbQ633qtopqaDs2R8HawSskeCyNgPE477c+e6tF1aUVRMUbe+In8Mx5xneYnw4zympZ3tdExOpv7pmPxUz5Tj2YmPHnHDT8/uuV4Th2M9rneYsnvOQU0FbVOtdBWXSnp5KeVzqdkNJSPhe5roxuWRSHfi2cW7EapS6p5HPhWqWT4bn+Q5DZ7BjPrNqvF5sUNG+C7Ris9YiY31SBsoYI6YuDo3cLiQTzIUzUOneMUVLRUhbda1lvuIutK+5XqtrpYqkRmMOElRK9/CGl3sb8G5J4dySuGr0swStfkrp7G4NzGnNNe4oqueOKsaWcBcY2vDGyFnIyNAeR3uV07u1ppxXRmcxOe2n+aJ45425x4Y3ymrZXlVXdRXiMTGO6r+WYic8c7/dz452wjLWjWW44yLDjthzyw4/ezaX5JWSXaopoWVkUTA2OiaZuQdUSkjiaN2tifttuCphw/KrTnGLWnL7DN2tBeKSOrpye8Ne3fhI8HDuI8CCF9s2J2CwXC4XW1UJiq7oIG1UrppJC9sLOCJo43Hha1u+zW7Ddzjtu4k/cexax4rb57VYKJ1JSVFVUVjoRNI5rZZpDJKWcTjwAvc53C3ZoJOwC62vrW9ejTRp0zFUeO2+ec/CeN528nbt9C509erU1K4mmrw32xxj4xnu2jfzQfePSHpbfrA6H6v7DHjFBeYsTqrG6opxWvqXsPHXhp+W7OOd8UBA2aA2Z5B2BW9GDLsu1Byu102pN+sFDY/UYqemtlLbnNcZYO0e57qmlmeTufBwGw7vFbS3T3DmYTLpz8TNdj09PLSy0j5pHF8chJk3kLu0Li5znF/FxcR3335roXHSXDbncpLs9+RUtXNDDBNJb8nudF2zYm8LDIIKhge4N5cbgXHxJXPVc2k/cpxiMcUz4xiZicbzvnnnl1qbS9j79cVZnuxmqnG0xNMTGZxG2OOJ2aFkLtRKXC8Tv0WtNe6tuFxs9orJbNBa56GoE9UyCWojdJRudxlrieRDA7uYByW52WryG0ajUuFV+U196pG49LXvnroaZk0s/rbWhzjBFG0bMdwgNaBsATueazcGA4nTY7acThtRFqsc1LUUMHrEpMUlPI2SFxeXcbyHtDjxE8R+dvuVxZNp3jGW3OnvN1F3grqWB1LHUW291tukMTnBxY40ssZe3iaDs7fY93iuObnRrjtqjEe1vFNOd+PLj4uWm019OYrpqzPs7TVVjb73nz8Pk0O+au1uIYTqJkl5ulKZrPkMtms3rRZDEySSKnbTse7YDgEkpc57tyGBxJ2CwePay3Ou0d1NbSZ/a8iynALbcZo77bjTSw1TDTST0dSGRAw7jbgc3bbjhfuNipRtWlmD2Z1vkpLZVSyWy4S3ankrLlVVchrJIjE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario De Supervicion Losa Aligerdad y Macisas</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             










                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>
            </form>`;
        }


        if (select.value == 12) {

            div.innerHTML =
                `  <form action="" id="form">

                <div class="row border">

                
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                
           
              
                        <h1>Formulario De Supervicion edificio de muro de mamposteria</h1>
        
                        
                </div>
                <div class="row ">
                    <div class="form-group 	col-6 border space">
                        <label for="nombre">Nombre del proyecto</label>
                        <input type="text" class="form-control" id="nombre" placeholder="
                ">
                    </div>
        
                    <div class="form-group col-6 border space">
                        <label for="fecha">Fecha</label>
                        <input type="date" class="form-control" id="fecha" placeholder="">
                        <label for="ejes">Ejes</label>
                        <input type="text" class="form-control" id="ejes" placeholder="
               ">
                    </div>
                  
                    <div class="form-group col-6 border space">
                        <label for="elemento">Elemento</label>
                        <input type="text" class="form-control" id="elemento" placeholder="">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" placeholder="
                ">
                    </div>
                    
                    <div class="form-group col-6 border space">
                        <label for="nivel">Nivel</label>
                        <input type="text" class="form-control" id="nivel" placeholder="">
                    </div>
        
                </div>
        
                <div class="row ">
        
                    <div class="form-group col-xl-6 border ">
        
                        <div class="row space box" id="camara">                       
                            <div class="form-group col-6 border" >

                           
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">
                    
                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                            <div class="form-group col-6 border">

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        
                            <div class="box  border" >
                            
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                    
                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        
                    
                    <div class="form-group col-xl-6 border ">
        
        
                        <div class="row space">
                            <div class="form-group col-7">
                                <label for="ESPESOR">Espesor</label>
                                <input type="text" class="form-control" id="ESPESOR" placeholder="
                             ">
                            </div>
                            <div class="form-group col-6">
                                <label for="re">Refuerzo vertical</label>
                                <input type="text" class="form-control" id="re" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="ref1">Refuerzo horizontal</label>
                                <input type="text" class="form-control" id="ref1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="acero">Acero en interseccion</label>
                                <input type="text" class="form-control" id="acero" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="acero1">Border (puerta o ventana)
                                </label>
                                <input type="text" class="form-control" id="acero1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="g">Ganchos</label>
                                <input type="text" class="form-control" id="g" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="g1">Long desarrollo</label>
                                <input type="text" class="form-control" id="g1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="viga">Vigas de amarre</label>
                                <input type="text" class="form-control" id="viga" placeholder="
                            ">
                            </div>
        
                            <div class="form-group col-6">
                                <label for="viga1">Acero en viga de amarre</label>
                                <input type="text" class="form-control" id="viga1" placeholder="
                            ">
                            </div>
        
        
                            <div class="form-group col-12">
                                <label for="exampleFormControlTextarea1">Comentarios</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1 " rows="4"></textarea>
                            </div>
                        </div>
                    </div>
        
                </div>




















                
                <div class="row ">
        
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="biggerBox border">

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="biggerBox border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             

                  >


                    
                    
                        </div>
                    </div>
        
                </div>
    
        
               
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario De Supervicion edificio de muro de mamposteria</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             










                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>
            </form>`;
        }


        if (select.value == 13) {

            div.innerHTML =
                `  <form action="" id="form">

                <div class="row border">

                
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                
           
              
                        <h1>Formulario De Supervicion edificio de muro contencion</h1>
        
                        
                </div>
                <div class="row ">
                    <div class="form-group 	col-6 border space">
                        <label for="nombre">Nombre del proyecto</label>
                        <input type="text" class="form-control" id="nombre" placeholder="
                ">
                    </div>
        
                    <div class="form-group col-6 border space">
                        <label for="fecha">Fecha</label>
                        <input type="date" class="form-control" id="fecha" placeholder="">
                        <label for="ejes">Ejes</label>
                        <input type="text" class="form-control" id="ejes" placeholder="
               ">
                    </div>
                  
                    <div class="form-group col-6 border space">
                        <label for="elemento">Elemento</label>
                        <input type="text" class="form-control" id="elemento" placeholder="">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" placeholder="
                ">
                    </div>
                    
                    <div class="form-group col-6 border space">
                        <label for="nivel">Nivel</label>
                        <input type="text" class="form-control" id="nivel" placeholder="">
                    </div>
        
                </div>
        
                <div class="row ">
        
                    <div class="form-group col-xl-6 border ">
        
                        <div class="row space box" id="camara">                       
                            <div class="form-group col-6 border" >

                           
                           
                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">


                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                            <div class="form-group col-6 border">
                            

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        
                            <div class="box  border" >

                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">
                            
                        <canvas  class="canvaselement "  ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        
                    
                    <div class="form-group col-xl-6 border ">
        
        
                        <div class="row space">
                            <div class="form-group col-3">
                                <label for="ESPESOR">Espesor</label>
                                <input type="text" class="form-control" id="ESPESOR" placeholder="
                             ">
                            </div>
                            <div class="form-group col-3">
                                <label for="d1">Dim zap lxb</label>
                                <input type="text" class="form-control" id="d1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-3">
                                <label for="d2">Acero zap Long</label>
                                <input type="text" class="form-control" id="d2" placeholder="
                            ">
                            </div>
                            <div class="form-group col-3">
                                <label for="acero1">Acero zap transversal</label>
                                <input type="text" class="form-control" id="acero1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="l1">Refuerzo vertical</label>
                                <input type="text" class="form-control" id="l1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="ub">Refuerzo horizontal</label>
                                <input type="text" class="form-control" id="ub" placeholder="
                            ">
                            </div>
                            <div class="form-group col-4">
                                <label for="t1">Acero en interseccion</label>
                                <input type="text" class="form-control" id="t1" placeholder="
                            ">
                            </div>
                            <div class="form-group col-6">
                                <label for="long1">Borde (puerta o ventana)
                                </label>
                                <input type="text" class="form-control" id="long1" placeholder="
                            ">
                            </div>
        
                            <div class="form-group col-6">
                                <label for="long2">Ganchos</label>
                                <input type="text" class="form-control" id="long2" placeholder="
                            ">
                            </div>

                            <div class="form-group col-6">
                            <label for="long3">Long desarrollo</label>
                            <input type="text" class="form-control" id="long2" placeholder="
                        ">
                        </div>

                        <div class="form-group col-6">
                        <label for="v1">Vigas de amarre</label>
                        <input type="text" class="form-control" id="v1" placeholder="
                    ">
                    </div>
        
                    <div class="form-group col-6">
                    <label for="v2">Acero en viga de amarre</label>
                    <input type="text" class="form-control" id="v2" placeholder="
                ">
                </div>

                <div class="form-group col-6">
                <label for="v2">Recubrimiento</label>
                <input type="text" class="form-control" id="v2" placeholder="
            ">
            </div>
        
                            <div class="form-group col-12">
                                <label for="exampleFormControlTextarea1">Comentarios</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1 " rows="4"></textarea>
                            </div>
                        </div>
                    </div>
        
                </div>




















                
                <div class="row ">
        
                    <div class="form-group col-6  border ">
                    <span>Fotos de levantamiento</span>
                        <div class="row space box" id="camara">                       
                            <div class="biggerBox border">


                            <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg></label>
        
                        
                         <input type="file"
                            id="${count++}" name="avatar"
                            accept="image/png, image/jpeg">

                            <canvas  class="canvaselement"   ></canvas>
                            </div>
        
                        </div>
        
                    </div>
        
        




                    
                    <div class="form-group col-6  border ">
                    <span>Observaciones</span>
                    <div class="row space box" id="camara"> 
                 
                    <div class="biggerBox border">


                    <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg></label>

                
                 <input type="file"
                    id="${count++}" name="avatar"
                    accept="image/png, image/jpeg">

                    <canvas  class="canvaselement"   ></canvas>
                    </div>

             



                    
                    
                        </div>
                    </div>
        
                </div>
    
        
           
        
                <div class="row border" id="after1">
                    <div class="form-group col-6"><span>Localizacion</span></div>
                    <div class="form-group col-6"><span>Detalles</span></div>
                </div>
                <br>



                <div class="row border space" id="secondpage" >
                     
                <img src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAA
                AAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGqAcIDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAFcQAAEDAwIDBAQFDA4JAwUAAAEAAgMEBQYHERIhURMxQWEIFCJxCRUjMoEWFzNCUmJykZOhscEZNDhWV2d2gpKWprPR5BgkNjdVdLK00yVz8ENTVKLx/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EQEAAQMDAgIHBgUEAwAAAAAAAQIEEQMhMQUSQVEGEyJhcZGxFDJCgaHBNFKC0fAVNXLhM7Lx/9oADAMBAAIRAxEAPwD1TREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARcFbW0lupZa2unZBBC3ikkedg0dSsTj2b4rlUssOP3qGskg+e1oc0jz2cBuPMIM6iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+Ag8wd0H1ERARFHerGp8OFUItdpIqL5Wjhp4W8zHvy4yP0BBhteM2tkdllweh46u7XAtHYw8zGN9/a28T0UMaZW/M25LM/D5Y4rrQxuc6GVwHaN32c3n3qadKtK57OX5tlznVN9q2uka2T2uw4h3n779CiKw1VdjOZRZqxx9WF5ko5umzidwfo3P0IzKUaXXDJMdl9U1Cwuqpdjwmop2Hh9+x5fiK3rHtU8GyUAW++wNkP/wBKY9m/8RWyy09Fc6YNqIIaiGRoID2hzSD71omQ6GYHfXOnhoHW6ocd+0pXcPPrt3Iu6QWPZI0PjcHNPMEHcFfpQi7TfVnBt5sKys3Gn33NLUHnt09r9Wy5KbXDJ8bkbS6g4ZU0/Pb1iBpDduu3cfoKGU1ItTx3VLB8na34uvsDJXbDsZz2b9/cVtbXNe0OY4EHuIKK+oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi/EkkcTDJK9rGN5lzjsAo8zDXLDMXa+ClqfjOsHIRU59kH753cEOEik7cytMzDVvDMOD4a24Coq2g7U9P7Tt+h8Aq85jrbmeWF0DKz4uozuBDTEtJHRzu8rQHvfI4ue4uceZJO5KuGcpSzL0gsryAvprKfimjcC3aM7yuHm7w+hdDT3WjI8MqhFXTS3K3SO3khleS5u/eWk9x8lHSK4Rd3Es1x/NbeK+xVrZAOUkTuUkZ6OCzyotYchvGM3CO52Wtkpp4zvu08neRHiFOtu9JSlkxeaSutxF9jAZFGwfJyuPLi8vcphYlumqeqVFglF6jRAVN6q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jE6eR00jnSv7MloLy7hHzdl279p9iOT1dfXXu0mea52eawVjm1MsYnoJSS+FwY4A/Ods7bibxO4SNzvyxc2cR29kzvE5xHhjbHlMZzvzPE4hwzaX9U93rIjaYxmfHO+fOJxjbiNpjMuvqDe7nZNLMlyO11PY3G34/WV1NNwNdwTx0z3sdwuBadnAHYgjyWhajZBlkOI41XY5neQU+VZHRU9LarPbobd2VbWOYHvqJTUUkrmRRh3HI5pa1rWgABzhvudNpFh1PS1tBJNktZS3Cimt1TTV+VXSshfBKwse3s5qhzQS0kBwAcPAhfi7aN4FebtRX6ppbzTXC329tqpp7fkNxoXR0jSD2Q9XnYNiQCSeZ2buTsNuPQ1rXSqjuiZxMz92N9to54zzv8HLcaF3rUz2zETMRG1VUY33mJiOccbc85hq2pea3fTLBcaxW8an0NJlOQVUduOTXOOlpooQ35WqqjG4NhHDGCxjCOb3xA8XMnG0erN2zjRywXzH8pjorzUZHbsau9faxT1DWTmtjp6l8BkZJE5r2u7RjuFw4ZGFSjaMDxqyXOlvNLDXT3CioZLbBVV1yqa2ZlO+XtXs455HuJLw0lxJcQxjd+FrQOnd9K8Gvj7tJX2upbJfKukuFa+muNVTPfVUoaIJmOikaYntDGe0wtJ4G8W+wW6Lm1iIiqjeJznEb77x2+WPDOMxxvLFdpeTNU0V4iae2IzVtttPdznOd8ZxPMzEMBDXZNgWf2qx37UCtyKzXu219Q511pqOGooZKXsnGRr6aGJroiyQhwc3druAh3MhaVo/r+zMNQ47bcM6sl0oMzp6mtsFtpZ6d1TafV5H7U87Y/lA+WmMc3ynNr2TNHcApJZotp4IbpDU2+6V7rzQm2Vk9wvtfWVD6Rzt3QNmmmdJHG4j2msc0O8d1sN5xTH8ggt1PdLeHx2ishr6ERyPhNPPECGOaYy0gAEt4e4tJaQQSFPtNr2zTVRmZjGcRGOcTERnxxnExtHO8n2W874qpriIic4zVVniJiZnHhnGYnE1cezDMIiLzHsCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=" alt="logo">
                     
                <h2>Formulario De Supervicion edificio de muro contencion</h2>


                <div class="row box secondpage" id="camara">   
                 
            
 
             










                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>

                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                
                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>


                <div class="form-group col-5 border">

                <label for="${count}" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
            </svg></label>

            
             <input type="file"
                id="${count++}" name="avatar"
                accept="image/png, image/jpeg">
                
                <canvas  class="canvaselement"   ></canvas>
                </div>
                </div>
            </div>
            </form>`;
        }


        tabContent.appendChild(div);
        closeIcon = document.querySelectorAll(".nav-tabs button li");

        for (let index = 0; index < closeIcon.length; index++) {

            closeIcon[index].addEventListener("click", function () {
                let parent = closeIcon[index].parentElement;
                let divdelete = document.querySelector(`#nav-page${index}`);
                parent.remove();
                divdelete.remove();
                num--;





            })
        }
        console.log(closeIcon);
    }




    const video = document.getElementById("element");
    const opens = (document.querySelectorAll(".bi-camera-fill"));
    const take = document.querySelector("#takephoto");
    const fileInputs = document.querySelectorAll(`input[type="file"]`);


    navigator.mediaDevices.getUserMedia(
        {

            video: {
                facingMode: { exact: "environment" },
            },
        }
    ).then(


        (stream) => {
            video.srcObject = stream;

        }
    ).catch((e) => {
        console.log(e);
    })

    for (const open of opens) {



        open.addEventListener("click", function () {

            if (open.parentElement.lastElementChild.tagName === "IMG") {
                open.parentElement.lastElementChild.remove();
            }
            canva = open.parentElement.lastElementChild;
            console.log(open);

        })

    }


    for (const inputs of fileInputs) {

        inputs.addEventListener("change", function () {

            let reader = new FileReader();
            reader.readAsDataURL(inputs.files[0]);
            reader.addEventListener("load", function () {
                if (inputs.parentElement.lastElementChild.tagName === "IMG") {
                    inputs.parentElement.lastElementChild.remove();
                }
                let image = document.createElement("img");
                image.setAttribute("src", ` ${reader.result}`);
                inputs.parentElement.append(image);


            })
        })


    }


 








})





const formPrinter = document.querySelector(".print");

document.addEventListener("DOMContentLoaded", function () {


    formPrinter.addEventListener("click", async function () {

        const icons = document.querySelectorAll("#camara svg");


        const cuerpo = document.querySelector("#nav-tabContent");

        var opt = {
            margin: 0,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a3', orientation: 'portrait' },
            pagebreak: { mode: 'avoid-all', after: '#after1' }
        };
        // New Promise-based usage:

        for (const icon of icons) {

            icon.classList.toggle("noshow");
        }

        await html2pdf().set(opt).from(cuerpo).save();

        for (const icon of icons) {

            icon.classList.toggle("show");
            icon.classList.toggle("show");
            icon.classList.toggle("noshow");
        }


    })


})





