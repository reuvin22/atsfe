import React from 'react'
import Cards from '../../components/Cards'
import CanvasJSReact from '../../canvasjs.react';

function Dashboard() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const employmentType = {
        backgroundColor: "white",
        title: {
            text: "Employment Type"
        },
        height: 360,
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Full Time",  y: 10  },
                { label: "Part Time", y: 15  },
                { label: "Freelancer", y: 25  }
            ]
        }
        ]
    }

    const employmentStatus = {
        backgroundColor: "white",
        title: {
            text: "Employment Status"
        },
        height: 200,
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "doughnut",
            dataPoints: [
                { label: "Employed",  y: 10  },
                { label: "Unemployed", y: 15  }
            ]
        }
        ]
    }

    const jobRelated = {
        backgroundColor: "white",
        title: {
            text: "Job Related"
        },
        height: 200,
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "doughnut",
            dataPoints: [
                { label: "Related",  y: 45  },
                { label: "Not Related", y: 100  }
            ]
        }
        ]
    }
    return (
        <div className='grid place-items-center sm:h-full '>
            <div className='flex gap-5 justify-center items-center mt-10 sm:grid md:grid'>
                <Cards 
                    bgColor='green'
                    title="Total"
                    count="20"
                    imageLogo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(1).png?alt=media&token=8a4ff95b-cc9b-47df-a1ce-668e26eb0800"
                />
                <Cards 
                    bgColor='blue'
                    title="Male"
                    count="10"
                    imageLogo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(3).png?alt=media&token=3b8c50c3-dcd2-4527-a67d-b5b265f42d7b"
                />
                <Cards 
                    bgColor='red'
                    title="Female"
                    count="10"
                    imageLogo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(4).png?alt=media&token=db636ea7-166d-4954-8b1d-d4375de3ab5e"
                />
            </div>
            <div className='flex w-full justify-center items-center mt-5 gap-5 py-10 sm:grid md:grid'>
                <div className='h-full w-[60%] sm:w-full sm:h-96'>
                    <CanvasJSChart options = {employmentType} />
                </div>
                <div className='grid h-full w-52 gap-5'>
                    <div className='border-2 rounded-xl h-52'>
                    <CanvasJSChart options = {employmentStatus} />
                    </div>
                    <div className='border-2 rounded-xl h-52 w-60'>
                    <CanvasJSChart options = {jobRelated} />
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default Dashboard