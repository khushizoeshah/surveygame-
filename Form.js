class Form {
    constructor() {
        this.q1 = createElement('h2')
        this.a1 = createInput("Answer...")
        this.submit = createButton("Submit")
        
        this.q2 = createElement('h2')
        this.a2 = createInput("Answer...")

        this.q3 = createElement('h2');
        this.a3 = createInput("Answer...")
    }

    display() {
        var answer1, answer2, answer3;
        var index;
        this.q1.html("Q1. Should Face Masks be distributed out for free in our society?")
        this.q1.position(displayWidth/3, 70)
        this.a1.position(displayWidth/3, 140)

        this.q2.html("Q2. Should walks be allowed in our society or not?")
        this.q2.position(displayWidth/3, 200)
        this.a2.position(displayWidth/3, 270)

        this.q3.html("Q3. Should delevery men be allowed inside to deliver the packages or not?")
        this.q3.position(displayWidth/3, 330)
        this.a3.position(displayWidth/3, 400)

        this.submit.position(displayWidth/3,displayHeight - 350)

        this.submit.mousePressed( ()=>{
            answer1 = this.a1.value();
            answer2 = this.a2.value();
            answer3 = this.a3.value();

            database.ref('userIndex').on("value", (data)=> {
                index = data.val() 
            })

            database.ref('Users/user' + index).set({
                response1: answer1,
                response2: answer2,
                response3: answer3
            })

            index+=1

            database.ref('/').update({
                userIndex: index
            })

        })
    }
}