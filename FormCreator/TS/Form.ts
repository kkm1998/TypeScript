class Form {
    fields: Field[];
    formElement: HTMLElement;
    formValues: Array<string>;
    outputTable = <HTMLElement>document.getElementById('Output_Table')
    outputDiv = <HTMLElement>document.getElementById('Output')
    sendButton = <HTMLElement>document.getElementById('Send')
    saveButton = <HTMLElement>document.getElementById('Save')

    constructor(id: string) {
        this.fields = new Array();
        this.formValues = new Array();
        this.formElement = document.getElementById(id) as HTMLElement;
        this.saveButton.addEventListener('click', () => { this.insertEditedDataToTable(<HTMLTableRowElement>document.getElementById('focused')) })
        this.fields.push(new InputField('Imię', 'Imię', FieldType.textBox))
        this.fields.push(new InputField('Nazwisko', 'Nazwisko', FieldType.textBox))
        this.fields.push(new EmailField('EMail', 'E-Mail', FieldType.Email))
        this.fields.push(new SelectField('Kierunek', 'Wybrany kierunek studiów', FieldType.Select, ['IT', 'Rachunkowość', 'Zarządzanie']))
        this.fields.push(new CheckboxField('Elearning', 'Czy preferujesz e-learning', FieldType.Check))
        this.fields.push(new TextAreaField('Uwagi', 'Uwagi', FieldType.TextArea))
    }
    render(): void {
        this.fields.forEach(element => {
            if (element.render().getAttribute('type') == 'checkbox') {
                let p = document.createElement('p')
                p.append(element.label)
                p.append(element.render())
                this.formElement.appendChild(p)
            }
            else {
                this.formElement.appendChild(element.render())
                this.formElement.appendChild(document.createElement("br"))
            }
        })
    }
    getValue(): void {
        this.formValues.length = 0
        this.fields.forEach(element => {
            this.formValues.push(element.getValue())
        })
    }
    createTable(): void {
        this.getValue()
        this.outputTable.style.display = 'inline-table'
        this.outputDiv.style.opacity = '1'
        const row = document.createElement('tr')
        this.outputTable.appendChild(row)
        for (let i = 0; i < this.formValues.length; i++) {
            const cell = document.createElement('th')
            cell.append(this.formValues[i])
            row.appendChild(cell)
        }
        const createButtonCell = document.createElement('th')
        const buttonEditRow = document.createElement('button')
        const buttonDeleteRow = document.createElement('button')
        //  const Btn_Save = document.createElement('button')
        buttonEditRow.setAttribute('id', 'Edit')
        buttonDeleteRow.setAttribute('id', 'del')
        // Btn_Save.setAttribute('id', 'saveButton')
        // Btn_Save.style.display = 'none'

        //Btn_Save.textContent = 'Save'
        createButtonCell.appendChild(buttonEditRow)
        createButtonCell.appendChild(buttonDeleteRow)
        //createButtonCell.appendChild(Btn_Save)
        row.appendChild(createButtonCell)
        document.getElementById('reset')?.click()
        buttonDeleteRow.addEventListener('click', () => { this.deleteDataFromRow(row) })
        buttonEditRow.addEventListener('click', () => { this.insertDataToForm(row/*Btn_Save*/) })

        //Btn_Save.addEventListener('click', () => { this.insertEditedDataToTable(row,Btn_Save) })

    }
    deleteDataFromRow(id: HTMLTableRowElement): void {
        this.outputTable.removeChild(id)
    }
    insertDataToForm(row: HTMLTableRowElement/*,BtN:HTMLElement*/): void {
        this.formElement.scrollIntoView(true)
        row.setAttribute('id', 'focused')
        this.sendButton.style.display = 'none'
        this.saveButton.style.display = 'inline'
        //BtN.style.display = 'inline'
        for (let i in this.fields) {
            let getFormElements = document.getElementById(this.fields[i].name) as HTMLFormElement
            this.fields[i].type == 'checkbox'?
                row.children[i].innerHTML == 'Tak' ? getFormElements.checked = true : getFormElements.checked = false
            :
                getFormElements.value = row.children[i].innerHTML
        }
        // form.Imię.value = row.children[0].innerHTML
        // form.Nazwisko.value = row.children[1].innerHTML
        // form.EMail.value = row.children[2].innerHTML
        // form.Kierunek.value = row.children[3].innerHTML
        // row.children[4].innerHTML == 'Tak' ? form.Elearning.setAttribute('checked', true) : form.Elearning.removeAttribute('checked')
        // form.Uwagi.value = row.children[5].innerHTML
    }
    insertEditedDataToTable(row: HTMLTableRowElement/*,BtN:HTMLElement*/): void {
        this.getValue()
        for (let i = 0; i < this.formValues.length; i++) {
            row.children[i].innerHTML = this.formValues[i]
        }
        this.sendButton.style.display = 'block'
        this.saveButton.style.display = 'none'
        document.getElementById('reset')?.click()
        row.id = ''
        row.scrollIntoView(false)
        // BtN.style.display = 'none'
    }
}
