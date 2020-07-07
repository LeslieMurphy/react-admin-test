import * as React from 'react';
import { Create, SimpleForm, TextInput, FileInput, FileField } from 'react-admin';

const UploadCSV = props => {
    
    return (
    
        <Create {...props}>
            <SimpleForm redirect="list">
                <TextInput source="id" disabled variant="outline" />
                <TextInput source="name" label="Dateiname" />
                <TextInput source="beschreibung" />
                <FileInput source="csvfile" label="CSV-Upload" accept="text/csv" >
                    <FileField source="src" title="title" />
                </FileInput>
            </SimpleForm>
        </Create>
    
    );
};

// TypeError: Cannot read property 'muiName' of undefined

export default UploadCSV;