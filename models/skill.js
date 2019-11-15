var mySkills = [
    'Javascript',
    'HTML',
    'CSS',
    'Node.js',
    'Express'
];

module.exports = {
    getAllSkills,
    getOneSkill,
    create,
    deleteOne
};

function deleteOne(idx) {
    mySkills.splice(idx, 1)
};

function create(skill) {
    mySkills.push(skill)
};

function getAllSkills() {
    return mySkills;
};

function getOneSkill(idx) {
    return mySkills[idx];
};