if (error.body) {
    if (error.body.message) {
        this.strErrorMessage.push(error.body.message);
    } else {
        Object.keys(error.body).forEach(errorPropertyName => {
            if (errorPropertyName == 'fieldErrors') {
                Object.keys(error.body.fieldErrors).forEach(fieldName => {
                    let listErrorObj = error.body.fieldErrors[fieldName];
                    listErrorObj.forEach(obj => {
                        this.strErrorMessage.push(obj.message);
                    });
                });
            }
            if (errorPropertyName == 'pageErrors') {
                let listErrorObj = error.body.pageErrors;
                listErrorObj.forEach(obj => {
                    this.strErrorMessage.push(obj.message);
                });
            }
            if (errorPropertyName == 'duplicateResults') {
                let listErrorObj = error.body.duplicateResults;
                listErrorObj.forEach(obj => {
                    this.strErrorMessage.push(obj.message);
                });
            }
        });
    }
}