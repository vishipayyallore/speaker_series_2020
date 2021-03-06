﻿using College.Core.Entities;
using College.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace College.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessorsController : ControllerBase
    {
        private readonly IProfessorsBLL _professorsBLL;
        private readonly ILogger<ProfessorsController> _logger;

        public ProfessorsController(IProfessorsBLL professorsBLL, ILogger<ProfessorsController> logger)
        {
            _professorsBLL = professorsBLL;

            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Professor>> Get()
        {
            IEnumerable<Professor> professors;

            _logger.Log(LogLevel.Debug, "Request Received for ProfessorsController::Get");

            professors = _professorsBLL.GetAllProfessors();

            _logger.Log(LogLevel.Debug, "Returning the results from ProfessorsController::Get");

            return Ok(professors);
        }

        [HttpGet("{id}")]
        public ActionResult<Professor> GetProfessorById(Guid id)
        {
            Professor professor;

            _logger.Log(LogLevel.Debug, "Request Received for ProfessorsController::GetProfessorById");

            professor = _professorsBLL.GetProfessorById(id);

            if (professor == null)
            {
                return NotFound();
            }

            _logger.Log(LogLevel.Debug, "Returning the results from ProfessorsController::GetProfessorById");

            return Ok(professor);
        }

    }

}
