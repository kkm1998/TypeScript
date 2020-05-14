!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);document.addEventListener("DOMContentLoaded",(function(){return new r}));var r=function(){var e,t=new i.Form("Studia");t.render(),null===(e=document.getElementById("Test"))||void 0===e||e.addEventListener("click",(function(){t.Test()}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=n(3),o=n(4),l=n(5),a=n(6),s=n(7),u=function(){function e(e){var t=this;this.socket=new WebSocket("ws://localhost:8080"),this.outputDiv=document.getElementById("Output"),this.sendButton=document.getElementById("Send"),this.saveButton=document.getElementById("Save"),this._storage=[],this.id=e,this.fields=new Array,this.formValues=new Array,this.formElement=document.getElementById(e),this.sendButton.addEventListener("click",(function(){t.getValue(),t.formValues.forEach((function(e){t.socket.send(e)})),t.addRowToTable()})),this.saveButton.addEventListener("click",(function(){t.insertEditedDataToTable(t.focusedRow)})),this.fields.push(new r.InputField("Imię","Imię",i.FieldType.textBox)),this.fields.push(new r.InputField("Nazwisko","Nazwisko",i.FieldType.textBox)),this.fields.push(new o.EmailField("EMail","E-Mail",i.FieldType.Email)),this.fields.push(new l.SelectField("Kierunek","Wybrany kierunek studiów",i.FieldType.Select,["IT","Rachunkowość","Zarządzanie"])),this.fields.push(new a.CheckboxField("Elearning","Czy preferujesz e-learning",i.FieldType.Check)),this.fields.push(new s.TextAreaField("Uwagi","Uwagi",i.FieldType.TextArea)),this.CreateTable(),this.outputTable=document.getElementById("Output_Table"),this.loadTable()}return e.prototype.CreateTable=function(){var e=document.createElement("table");e.id="Output_Table";var t=document.createElement("tr");t.id="heading",this.fields.forEach((function(e){var n=document.createElement("th");n.innerText=e.label,t.appendChild(n)}));var n=document.createElement("th");n.innerText="Edycja",t.appendChild(n),e.appendChild(t),this.outputDiv.appendChild(e)},e.prototype.render=function(){var e,t=this,n=document.createElement("p");n.setAttribute("id","headerForm"),n.appendChild(document.createTextNode(this.id)),null===(e=this.formElement.parentNode)||void 0===e||e.insertBefore(n,this.formElement),this.fields.forEach((function(e){if("checkbox"==e.render().getAttribute("type")){var n=document.createElement("p");n.append(e.label),n.append(e.render()),t.formElement.appendChild(n)}else t.formElement.appendChild(e.render()),t.formElement.appendChild(document.createElement("br"))}))},e.prototype.getValue=function(){var e=this;this.fields.forEach((function(t){e.formValues.push(t.getValue())}))},e.prototype.addRowToTable=function(e){var t,n=this,i=e||{row_id:"id_"+(new Date).getTime()};this.outputTable.style.display="inline-table",this.outputDiv.style.opacity="1";var r=document.createElement("tr");this.outputTable.appendChild(r);for(var o=0;o<this.formValues.length;o++){var l=document.createElement("th");l.append(this.formValues[o]),r.appendChild(l)}r.id=null==e?i.row_id:e;var a=document.createElement("th"),s=document.createElement("button"),u=document.createElement("button");s.setAttribute("id","Edit"),u.setAttribute("id","del"),a.appendChild(s),a.appendChild(u),r.appendChild(a),null===(t=document.getElementById("reset"))||void 0===t||t.click(),u.addEventListener("click",(function(){n.deleteDataFromRow(r)})),s.addEventListener("click",(function(){n.insertDataToForm(r)})),null==e&&(this._storage.push(JSON.stringify(r.id)),this._storage.push(JSON.stringify(this.formValues))),localStorage.setItem(this.id,JSON.stringify(this._storage)),this.formValues.length=0},e.prototype.deleteDataFromRow=function(e){for(var t=JSON.parse(localStorage.getItem(this.id)||""),n=0;n<t.length;n++)JSON.parse(t[n])==e.id&&t.splice(n,2);localStorage.setItem(this.id,JSON.stringify(t)),this.outputTable.removeChild(e)},e.prototype.insertDataToForm=function(e){for(var t in this.focusedRow=e,this.formElement.scrollIntoView(!0),e.style.backgroundColor="skyblue",this.sendButton.style.display="none",this.saveButton.style.display="inline",this.fields){var n=document.getElementById(this.fields[t].name);"checkbox"==this.fields[t].type?"Tak"==e.children[t].innerHTML?n.checked=!0:n.checked=!1:n.value=e.children[t].innerHTML}},e.prototype.insertEditedDataToTable=function(e){var t;for(var n in e.style.backgroundColor="white",this.sendButton.style.display="block",this.saveButton.style.display="none",this.getValue(),this.formValues)e.children[n].textContent=this.formValues[n];var i=JSON.parse(localStorage.getItem(this.id)||"");for(n=0;n<i.length;n++)JSON.parse(i[n])==e.id&&(i[n+1]=JSON.stringify(this.formValues));localStorage.setItem(this.id,JSON.stringify(i)),null===(t=document.getElementById("reset"))||void 0===t||t.click(),e.scrollIntoView(!0)},e.prototype.Test=function(){for(var e=["IT","Rachunkowość","Zarządzanie"],t=10;0!=t--;){var n=[];for(var i in this.fields)n.push(document.getElementById(this.fields[i].name));var r=Math.round(Math.random());n[0].value=Math.random().toString(36).substring(7),n[1].value=Math.random().toString(36).substring(7),n[2].value=Math.random().toString(36).substring(3),n[3].value=e[Math.ceil(2*Math.random())],n[4].value=n[4].checked=1==r,n[5].value=Math.random().toString(36).substring(1),this.sendButton.click()}},e.prototype.loadTable=function(){if(0!=localStorage.length)for(var e=JSON.parse(localStorage.getItem(this.id)||""),t="",n=0;n<e.length;n++)n%2==0==1?t=JSON.parse(e[n]):(this.formValues=JSON.parse(e[n]),this._storage.push(JSON.stringify(t)),this._storage.push(JSON.stringify(this.formValues)),this.addRowToTable(t))},e}();t.Form=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.textBox="text",e.Check="checkbox",e.Email="email",e.Select="select",e.TextArea="textarea"}(t.FieldType||(t.FieldType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,n){this.element=document.createElement("input"),this.name=e,this.label=t,this.type=n,this.element.name=this.name,this.element.id=this.name,this.element.type=this.type,this.element.placeholder=this.label}return e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},e}();t.InputField=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,n){this.element=document.createElement("input"),this.name=e,this.label=t,this.type=n,this.element.name=this.name,this.element.id=this.name,this.element.type=this.type,this.element.placeholder=this.label}return e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},e}();t.EmailField=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,n,i){var r=this;this.element=document.createElement("select"),this.name=e,this.label=t,this.type=n,this.element.name=this.name,this.element.id=this.name,this.element.setAttribute("type",this.type);var o=document.createElement("option");o.setAttribute("hidden","hidden");var l=document.createTextNode(t);o.appendChild(l),this.element.appendChild(o),i.forEach((function(e){var t=document.createElement("option"),n=document.createTextNode(e);t.appendChild(n),r.element.appendChild(t)}))}return e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},e}();t.SelectField=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,n){this.element=document.createElement("input"),this.name=e,this.label=t,this.element.name=this.name,this.type=n,this.element.id=this.name,this.element.type=this.type}return e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return 1==this.element.checked?this.element.value="Tak":this.element.value="Nie",this.element.value},e}();t.CheckboxField=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,n){this.element=document.createElement("textarea"),this.name=e,this.label=t,this.type=n,this.element.name=this.name,this.element.id=this.name,this.element.placeholder=this.label,this.element.setAttribute("type",this.type)}return e.prototype.render=function(){return this.element},e.prototype.getValue=function(){return this.element.value},e}();t.TextAreaField=i}]);
//# sourceMappingURL=bundle.js.map