var Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
};

function create(req, res) {
    Skill.create(req.body.skill),
    res.redirect('/skills')
};

function newSkill(req, res) {
    res.render('skills/new')
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAllSkills()
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOneSkill(req.params.id),
        oneSkill: req.params.id,
        // idx: req.params.id
    });
};