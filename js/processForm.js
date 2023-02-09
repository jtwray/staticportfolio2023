function getTimeofDayofWeek(){
    // For todays date;
      Date.prototype.today = function () { 
      return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
      }
    // For the time now
      Date.prototype.timeNow = function () {
       return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
      }
      var datetime =`${new Date().today()} @${new Date().timeNow()}`
    return datetime
  }
  
  
  const processForm = form => {
    const datetime=getTimeofDayofWeek()
    const data = new FormData(form);
    data.append("form-name", "reachout");
    fetch("/", {
      method: "POST",
      body: data
    })
      .then(() => {
        form.innerHTML = `<div class="form--success">Success! You message has been delivered ${datetime}. Thanks for reaching out. Ill be in touch ASAP. </div>`;
      })
      .catch(error => {
        form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
      });
  };
  
  const reachout = document.querySelector(".reachout");
  if (reachout) {
    reachout.addEventListener("submit", e => {
      e.preventDefault();
      processForm(reachout);
    });
  }
  