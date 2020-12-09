let gradeAfterCal;
let termgrade;
let Scount=0;
let GAlltemp=0;
let GradeAll;
let GradeM;


function forGradeAll(Grade) {
    Scount = Scount+3
    GAlltemp = (GAlltemp + (Grade*3))/Scount
    return GAlltemp
}



                    document.addEventListener('DOMContentLoaded',function(){
                    //inputform
                    document.querySelector('#inputform').onsubmit = function(){ 

                  //for input
                  const list = document.createElement('td')
                  const T = document.createElement('td')
                  const G = document.createElement('td')
                  const space = document.createElement('tr')
                  GradeAll = document.createElement('td')
                  //for calculate
                  list.innerHTML = document.querySelector('#ClassName').value
                  G.innerHTML = document.querySelector('#GradeJA').value
                  T.innerHTML = document.querySelector('#term').value
                  //console.log(document.querySelector('#ClassName'))
                  const tasks = document.querySelector('#courses')
            //interface
            tasks.append(list)
            tasks.append(T)
            tasks.append(G)
            tasks.append(space)

            GradeAll = forGradeAll(G)
            
            return false
        }

        document.querySelector('#calculate').onsubmit= function(){
            document.querySelector('#resultja')
            

            return false
        }
       



    })