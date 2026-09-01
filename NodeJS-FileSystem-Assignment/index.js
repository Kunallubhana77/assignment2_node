const fs = require('fs');
const studentInfo = `Name: Kunal
Course: Full Stack Development
Technology: Node.js`;

fs.writeFile('student.txt', studentInfo, (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created successfully');





    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log(data);




        const additionalInfo = `\nExperience: 1 Year\nCity: Kolkata`;
        fs.appendFile('student.txt', additionalInfo, (err) => {
            if (err) {
                console.error('Error updating file:', err);
                return;
            }
            console.log('Data updated successfully');

           



            fs.rename('student.txt', 'studentDetails.txt', (err) => {
                if (err) {
                    console.error('Error renaming file:', err);
                    return;
                }
                console.log('File renamed successfully to studentDetails.txt');

       


                
                fs.unlink('studentDetails.txt', (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                        return;
                    }
                    console.log('File deleted successfully');
                });
            });
        });
    });
});
