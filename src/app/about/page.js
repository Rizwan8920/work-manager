import React from 'react'

async function takeTime(){
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    })
}

const About = async () => {
  await  takeTime();
//   throw new Error("this is manual error");
  return (
    <div>about page</div>
  )
}

export default About