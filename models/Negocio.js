class Negocio{
    constructor(id,data){
        this.bandera=0;
        this.id=id;
        this.nombre=data.nombre;   

        this.desc=data.desc;
       
        this.prod=data.prod; 
        this.foto=data.foto;   
        this.userid=data.userid;
       
    }
    set id(id){
        if(id!=null)
        id.length>0?this._id=id:this.bandera=1;
    }

    set nombre(nombre){
        nombre.length>0?this._nombre=nombre:this.bandera=1;
    }
    
   
    set desc(desc){
        desc.length>0?this._desc=desc:this.bandera=1;
    }


    set prod(prod){
        if (prod && prod.length > 0) {
            this._prod = prod;
        } else {
            this.bandera = 1;
        }
    }

    set foto(foto){
        foto.length>0?this._foto=foto:this.bandera=1;
    }

    set userid(userid){
        userid.length>0?this._userid=userid:this.bandera=1;
    }

   

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }

   

    get desc(){
        return this._desc;
    }

  
    get prod(){
        return this._prod;
    }

    get foto(){
        return this._foto;
    }
    get userid(){
        return this._userid;
    }
   

    
    get obtenerDatos(){
        if(this._id==null){
            return {
                nombre:this.nombre,
               
                desc:this.desc,
               
                prod:this.prod,
                foto:this.foto,
                userid:this.userid,
               
            }
        }else{
            return{
                id:this.id,
                nombre:this.nombre,
               
                desc:this.desc,
               
                prod:this.prod,
                foto:this.foto ,
                userid:this.userid,
              
            }
        }

    }
}

module.exports=Negocio;