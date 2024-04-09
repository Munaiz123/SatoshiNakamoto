export const headers = {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'}

export const headerClassName = 'super-app-theme--header'

export const convertTimestamp = (timestamp) =>{
    // Parse the timestamp string into a Date object
    const parsedTimestamp = new Date(timestamp);

    // Extract date and time components
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return parsedTimestamp.toLocaleDateString('en-US', options);
}
