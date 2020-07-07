import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import UploadCSV from './UploadCSV';
 
export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        <UploadCSV basePath="foo" resource="bar" />
    </Card>
);