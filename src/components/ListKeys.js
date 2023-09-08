import React from 'react'

const ListKeys = () => {
    const Developer = [
       { name : "Mohandhass", skills:[{Role:"Frontend",Techstack:"React"},{Role:"Backend",Techstack:"MongoDB"}]},
       { name:"Jeevanandham", skills:[{Role:"Frontend",Techstack:"Angular"},{Role:"Backend",Techstack:"MySQL"}]}
    ];
  return (
    <div style={{color:"teal"}}>{Developer.map((dev,index)=>(
        <div key={index}>
          <h3>{dev.name} Skills</h3>
          <div>
            {dev.skills.map((skill,index) => (
            <p key={index}>
            {skill.Role}-{skill.Techstack}
            </p>
           ))}
          </div>
        </div>
   ))}</div>
  );
}

export default ListKeys