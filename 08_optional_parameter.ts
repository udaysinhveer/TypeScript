

function display(id:number, name:string, role?:string){
    console.log("Id", id);
    console.log("Name", name);
    if(role!= undefined){             // we use this if condition, because we don't want undefined... 
        console.log("Role", role);   // output on a console
    }
}
    display(1, "Dnyanesh", "Admin");
    display(1, "Dnyanesh");