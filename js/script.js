let courses = [

    {
    
    title: 'SMM',
    
    howLong: 3
    
    },
    
    {
    
    title: 'Dev',
    
    howLong: 6
    
    },
    
    {
    
    title: 'Graph',
    
    howLong: 4
    
    },
    
    ]
    
    let students = [
    
    {
    
    sex: 'men',
    
    age: 14,
    
    payment: 1220000,
    
    course: {
    
    title: 'SMM',
    
    }
    
    },
    
    {
    
    sex: 'men',
    
    age: 24,
    
    payment: 1883000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 16,
    
    payment: 2190000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'men',
    
    age: 19,
    
    payment: 718000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 15,
    
    payment: 2195000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'men',
    
    age: 24,
    
    payment: 460000,
    
    course: {
    
    title: 'SMM'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 14,
    
    payment: 560000,
    
    course: {
    
    title: 'SMM'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 22,
    
    payment: 160000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'men',
    
    age: 26,
    
    payment: 883000,
    
    course: {
    
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 26,
    
    payment: 750000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'men',
    
    age: 23,
    
    payment: 212000,
    
    course: {
    
    title: 'Graph',
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 24,
    
    payment: 883000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 27,
    
    payment: 190000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 19,
    
    payment: 210000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 21,
    
    payment: 770000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'men',
    
    age: 18,
    
    payment: 1200000,
    
    course: {
    
    title: 'SMM'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 51,
    
    payment: 880000,
    
    course: {
    
    title: 'SMM'
    
    }
    
    },
    
    {
    
    sex: 'men',
    
    age: 51,
    
    payment: 2430000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 33,
    
    payment: 1277000,
    
    course: {
    
    title: 'Graph'
    
    }
    
    },
    
    {
    
    sex: 'women',
    
    age: 21,
    
    payment: 2750000,
    
    course: {
    
    title: 'Dev'
    
    }
    
    },
    
    ]
    let earnings = {
    
        total: 0,
        
        max: 0,
        
        min: 0
        
        }
    let men = 0,
    women = 0, 
    socialMediaMarketing = 0,
    development = 0,
    graphicDesign = 0, 
    averageAge = 0
    payments = []
    
//task 6
socialMediaMarketing = students.filter(element => element.course.title === courses[0].title).length
development = students.filter(element => element.course.title === courses[1].title).length
graphicDesign = students.filter(element => element.course.title === courses[2].title).length

//task 2
men = students.filter(element => element.sex === 'men').length
women = students.filter(element => element.sex === 'women').length

//task 1 3 4 5 7
students.forEach(element => {
    //task 1
    if(element.course.title === courses[0].title){
        element.course = courses[0]
    }else if(element.course.title === courses[1].title){
        element.course = courses[1]
    }else{
        element.course = courses[2]
    }

    //task 7 part 1
    averageAge += element.age/students.length
    //task 3 4 5
    earnings.total +=element.payment
    payments.push(element.payment)
    payments.sort((a, b) => a - b)
    earnings.max = payments[payments.length - 1]
    earnings.min = payments[0]
})
//task 7 part 2
averageAge = Math.round(averageAge)

console.log(students);
console.log(`Men: ${men}`);
console.log(`Women: ${women}`);
console.log(earnings);
console.log(`Social media marketing: ${socialMediaMarketing}`);
console.log(`Development: ${development}`);
console.log(`Graphic design: ${graphicDesign}`);
console.log(`Average age: ${averageAge}`);