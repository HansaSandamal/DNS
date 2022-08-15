import ItemRepository from "../repositories/ItemRepository";


async function createItem(req:any,res:any,next:any){
    ItemRepository.createItem(req.body)
    .then((data)=>res.json(data))
    .catch((e)=>next(e));

    
}

async function getAllItems(req:any,res:any,next:any) {
    ItemRepository.getAllItems()
    .then((data)=>res.json(data))
    .catch((e)=>next(e));
    
}
export default{
    createItem,
    getAllItems
}