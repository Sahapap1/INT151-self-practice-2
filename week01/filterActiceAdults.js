// Write a function that takes an array of user objects with fields: { name, age, active } 
// and returns a new array of users who are active and at least 18 years old. If the input is not a valid array, 
// return an empty array.


// code !!!!

function filterActiveAdults(users) {
    if (Array.isArray(users)) {
        return users
            .filter((item) => item !== null && typeof item === 'object')
            .filter((user) => user.age >= 18 && typeof user.age === 'number' && (user.active === true))
    }

    return []
}


// 1. Invalid user inputs
console.log("\n\n1. Invalid user inputs");
console.log(filterActiveAdults(undefined)) // => []
console.log(filterActiveAdults(null)) // => []
console.log(filterActiveAdults([])) // => []
console.log(filterActiveAdults(101)) //=>[]

// 2. Valid user input
console.log("\n\n2. Valid user input");
console.log(filterActiveAdults([
    { name: 'John', age: 20, active: true },
    { name: 'Jane', age: 17, active: true },
    { name: 'Bob', age: 25, active: false }
]))
// => [ { name: 'John', age: 20, active: true } ]

console.log("\n")
console.log(filterActiveAdults([
    { name: "Alice", age: 22, active: true },
    { name: "Bob", age: 17, active: true },
    { name: "Charlie", age: 30, active: false },
    { name: "Daisy", age: 25, active: true }
]))
// => [{ name: "Alice", age: 22, active: true }, { name: "Daisy", age: 25, active: true }]

//3.Invalid value or missing value
console.log("\n\n3.Invalid value or missing value");
console.log(filterActiveAdults([
    { name: "Eve", age: "22", active: true }, // age not number
    { name: "Fred", age: 19 }, // missing active
    { name: "Gina", age: 20, active: true }
]));

// => [{ name: "Gina", age: 20, active: true }]
console.log("\n")
console.log(filterActiveAdults([
    { name: "Fred", age: 19 }, // missing active
    { name: "Gina", age: 10, active: true }
]))
// => []

function testCase() {
    // 1. returns empty array for null, undefined, or non-array
    console.log("\n\n\t================== Test case ==================");
    console.log("\n1.returns empty array for null, undefined, or non-array");

    const case1 = [null, undefined, 123, {}, []]
    for (let i of case1) {
        const result1 = filterActiveAdults(i)
        if (Array.isArray(result1) && result1.length === 0) {
            console.log(`Test Case 1 (Invalid user inputs ${i}): PASSED✅`);
        } else {
            console.error(`Test Case 1 (Invalid user inputs ${i}): FAILED❌. Expected [], got ${result1}`);
        }
    }

    // function test
    function testCase(caseId, caseHead, result, expected) {
        if (result.length === expected.length) {
            let allMatch = true;
            for (let i = 0; i < result.length; i++) {
                const user = result[i];
                const exUser = expected[i];

                const userKeys = Object.keys(user);
                const exUserKeys = Object.keys(exUser);

                if (userKeys.length !== exUserKeys.length) {
                    allMatch = false;
                    break;
                }

                for (let key of userKeys) {
                    if (user[key] !== exUser[key]) {
                        allMatch = false;
                        break;
                    }
                }

                if (!allMatch) break;
            }

            if (allMatch) {
                console.log(`Test Case ${caseId} (${caseHead}): PASSED ✅`);
            } else {
                console.error(`Test Case ${caseId} (${caseHead}): FAILED ❌. Expected`, expected, "got", result);
            }
        } else {
            console.error(`Test Case ${caseId} (${caseHead}): FAILED ❌. Expected`, expected, "got", result);
        }
    }

    // 2. filters out inactive users and underage users
    console.log("\n2.filters out inactive users and underage users");

    const result2 = filterActiveAdults([
        { name: 'A', age: 25, active: true },
        { name: 'B', age: 17, active: true },
        { name: 'C', age: 20, active: false },
        { name: 'D', age: 18, active: true }
    ])
    const expected_result2 = [
        { name: 'A', age: 25, active: true },
        { name: 'D', age: 18, active: true }
    ]
    testCase(2, "Inactive users and underage users", result2, expected_result2)

    // 3.ignores items with missing or malformed fields
    console.log("\n3.ignores items with missing or malformed fields")

    const result3 = filterActiveAdults([
        { name: 'X', age: '22', active: true }, // age not number
        { name: 'Y', active: true }, // missing age
        { name: 'Z', age: 22 }, // missing active
        { name: 'Valid', age: 22, active: true }
    ])
    const expected_result3 = [
        { name: 'Valid', age: 22, active: true }
    ]
    testCase(3, "Ignores items with missing", result3, expected_result3)


    // 4.returns only active users 18+
    console.log("\n4.returns only active users 18+")
    const result4 = filterActiveAdults([
        { name: 'John', age: 21, active: true },
        { name: 'Jane', age: 18, active: true },
        { name: 'Doe', age: 17, active: true },
        { name: 'Alex', age: 25, active: false }
    ])
    const expected_result4 = [
        { name: 'John', age: 21, active: true },
        { name: 'Jane', age: 18, active: true }
    ]
    testCase(4, "only active users 18+", result4, expected_result4)


    // 5.handles mix of valid and invalid users
    console.log("\n5.handles mix of valid and invalid users");
    const result5 = filterActiveAdults([
        null,
        undefined,
        { name: 'A', age: 20, active: true },
        42,
        'user',
        { name: 'B', age: 17, active: true }
    ])
    const expected_result5 = [
        { name: 'A', age: 20, active: true }
    ]
    testCase(5, "mix of valid and invalid users", result5, expected_result5)

    const result6 = filterActiveAdults([
        { name: 'A', age: '25', active: true },
        { name: 'B', age: 17 }
    ])
    const expected_result6 = []
    testCase(5, "mix of valid and invalid users", result6, expected_result6)

}

testCase()