import React from "react";

export default function Page() {
    return <div className="sm:px-48 px-4 py-10">
        <h1 className="text-4xl mb-4">Student Council</h1>

        <div className="text-justify flex flex-col">
            <p className="font-bold pb-4 text-lg">Roles of the Student Council</p>
            <ol>
                <li className="list-inside list-decimal">To officially represent all the students in the Institute.</li>
                <li className="list-inside list-decimal">To identify and help solve problems encountered by students in the Institute.</li>
                <li className="list-inside list-decimal">To communicate its opinion to the Institute administration on any subject that concerns students and on which the council wishes to be consulted.</li>
                <li className="list-inside list-decimal">To promote and encourage the involvement of students in organizing Institute activities.</li>
            </ol>

            <p className="font-bold pt-8 pb-4 text-lg">Responsibilities of the Student Council</p>
            <ol>
                <li className="list-inside list-decimal">To promote the interests of students among the Institute administration, staff and parents.</li>
                <li className="list-inside list-decimal">To inform students about any subject that concerns them</li>
                <li className="list-inside list-decimal">To identify and help solve problems encountered by students in the Institute.</li>
                <li className="list-inside list-decimal">To consult students on any issue of importance.</li>
                <li className="list-inside list-decimal">To organize educational and recreational activities for students.</li>
                <li className="list-inside list-decimal">To participate in developing the Institute’s educational projects and to promote it to students</li>
                <li className="list-inside list-decimal">To organize an activity to recognize the efforts of students involved in organizing Institute activities.</li>
                <li className="list-inside list-decimal">To propose activities to the Institute administration that would improve the quality of life in the Institute.</li>
                <li className="list-inside list-decimal">To maintain good relations, out of mutual respect, with the Institute staff (the Director, teaching and non-teaching personnel) and parents.</li>
            </ol>

            <p className="font-bold pt-8 pb-4 text-lg">Roles of the Members of the Student Council</p>
            <p className="font-bold pb-4">President</p>
            <ul>
                <li className="list-inside list-decimal">To act as official spokesperson for the council in its relations with the students and the Institute administration.</li>
                <li className="list-inside list-decimal">To call meetings of the council and to prepare the agendas.</li>
                <li className="list-inside list-decimal">To chair the meetings of the council.</li>
                <li className="list-inside list-decimal">To supervise the tasks of the council members.</li>
                <li className="list-inside list-decimal">To take part in all special committees formed by the council or send a representative to such committees.</li>
                <li className="list-inside list-decimal">To represent the students on official occasions.</li>
            </ul>

            <p className="font-bold pt-8 pb-4">Vice President (Academics, Mentoring & Extra Inputs)</p>
            <ul>
                <li className="list-inside list-decimal">Coordinate activities for Extra Inputs and suggest extra inputs in consultation with the students.</li>
                <li className="list-inside list-decimal">Submit timely, documented and true feedback of the extra inputs to the Management.</li>
            </ul>

            <p className="font-bold pt-8 pb-4">Vice President (Discipline)</p>
            <ul>
                <li className="list-inside list-decimal">Review the attendance in the class as well as when the students attend functions and programmes in the Institute and outside the Institute.</li>
                <li className="list-inside list-decimal">Ensure that the students adhere to the disciplinary policies of the Institute at all times.</li>
            </ul>

            <p className="font-bold pt-8 pb-4">Vice President (Events)</p>
            <ul>
                <li className="list-inside list-decimal">Arrange Intra-collegiate events and ensure participation of students in Inter college events.</li>
            </ul>

            <p className="font-bold pt-8 pb-4">Vice President (Alumni & E-Cell)</p>
            <ul>
                <li className="list-inside list-decimal">Establish a network with the alumni through various activities conducted by the college like REFLECTIONS (alumni meet), and interact with the alumni at various forums and always maintain an updated database of the alumni. .</li>
                <li className="list-inside list-decimal">Host various workshops, speaker sessions, innovative games, competitions for aspiring entrepreneurs and support them by providing necessary resources such as, mentoring, consultancy and networking.</li>
            </ul>

            <p className="font-bold pt-8 pb-4">Vice President (Physical fitness & CSR)</p>
            <ul>
                <li className="list-inside list-decimal">Ensure that students are involved in some kind of physical activity like yoga, aerobics, gym etc.</li>
                <li className="list-inside list-decimal">Arrange sports day in the Institute.</li>
                <li className="list-inside list-decimal">Involve the students in CSR activities like arranging Blood donation camps, helping the affected during natural calamities.</li>
            </ul>

            <table className="table table-fixed table-bordered w-fit self-center">
                <caption className="text-xl font-bold caption-top text-center pt-8 pb-4">STUDENT'S COUNCIL FOR ACADEMIC YEAR 2022 - 2024</caption>
                <thead>
                    <tr>
                        <th className="w-[10%] text-wrap">SR. NO.</th>
                        <th className="w-[45%] text-wrap"> Designation</th>
                        <th className="w-[45%] text-wrap"> STUDENT’S NAME</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>President</td>
                        <td>A. B. C.</td>
                        <td>9999999999</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Vice President Academics and Research</td>
                        <td>D. E. F.</td>
                        <td>9999999999</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vice President Discipline</td>
                        <td>G. H. I.</td>
                        <td>9999999999</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Vice President Discipline</td>
                        <td>J. K. L.</td>
                        <td>9999999999</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Vice President CSR</td>
                        <td>M. N. O.</td>
                        <td>9999999999</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Vice President E-Cell</td>
                        <td>P. Q. R.</td>
                        <td>9999999999</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Vice President Events and Co-curricular</td>
                        <td>S. T. U.</td>
                        <td>9999999999</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Vice President Events and Co-curricular</td>
                        <td>V. W. X.</td>
                        <td>9999999999</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Vice President Alumni</td>
                        <td>Y. Z.</td>
                        <td>9999999999</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div >
}