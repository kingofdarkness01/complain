let cform = document.getElementById("complaint-form")
cform.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("submited")
    let catogory = document.getElementById("category")
    let block = document.getElementById("block")
    let Room_no = document.getElementById("Room_No")
    let imange = document.getElementById("complaintImage")
    let video = document.getElementById("complaintVideo")
    let complaint = document.getElementById("complaint")
    console.log(category.value)
    console.log(block.value)
    console.log(Room_No.value)
    console.log(complaintImage.value )
    console.log(complaintVideo.value )
    console.log(complaint.value )
    

});

