import React from 'react'
import {Bar, Pie} from 'react-chartjs-2'



function Chart() {
    return (
        <div>
            <Pie
            
           
data={{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets:[
    {
label: "% of votes",
data: [12,54,24,65,45,2],
backgroundColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
],    borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
],
borderWidth: 1

    }  


  ]

}}
            height={400}
            width={600}
            options={{

                maintainAspectRatio: false ,
                plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 17
                            }
                        }
                    }
                }


            }}
            />
        </div>
    )
}

export default Chart
