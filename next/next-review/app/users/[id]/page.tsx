
import { notFound } from "next/navigation"
async function getUser(id:string){
    const res=await fetch(`http://localhost:4000/users/${id}`);
    if(res.status===404){
        notFound();
    }
    return res.json();
}

export default async function UserPage({ 
    params 
}:{
    params:Promise<{id:string}>
}){
    const {id}=await params;
    const user=await getUser(id);
    return (
        <div>
            <div>
                <h3>{user.name}</h3>
                <p>email：{user.email}</p>
                <p>city：{user.address.city}</p>
                <p>skills：{user.skills.join('、')}</p>
            </div>
        </div>
    )
}