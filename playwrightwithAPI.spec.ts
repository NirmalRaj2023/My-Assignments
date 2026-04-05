import test from "@playwright/test"

test.describe.serial(`Test executed in serial mode`, () => {

let id : any;
test("Creating playwright with API",async({request})=>{
    const response = await request.post(`https://dev231458.service-now.com/api/now/table/incident`,
        {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46WjkqTGUwd0VMLWFo"
              },
        data: {
                "short_description": "Laptop not working created using Playwright API"
            }      
    })
    const reponseBody= await response.json()
    console.log(reponseBody);
    id = reponseBody.result.sys_id
})
test ("Fetch the incident",async({request})=>{
const response = await request.get(`https://dev231458.service-now.com/api/now/table/incident/${id}`,
    {
         headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic YWRtaW46WjkqTGUwd0VMLWFo"
              },
    }
)
console.log(await response.json());

})

test("Update the incident",async({request})=>{
const update = await request.patch(`https://dev231458.service-now.com/api/now/table/incident/${id}`,
    {
       headers:{
        "Content-Type": "application/json",
        "Authorization": "Basic YWRtaW46WjkqTGUwd0VMLWFo"
       },
       data:{
        "short_description": "the issue resolved now"
       } 
    }
)
console.log(await update.json());
})

test("delete the incident",async({request})=>{
const todelete = await request.delete(`https://dev231458.service-now.com/api/now/table/incident/${id}`,
    {
       headers:{
        "Content-Type": "application/json",
        "Authorization": "Basic YWRtaW46WjkqTGUwd0VMLWFo"
       }, 
    }
)
console.log(todelete);
})
})