using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PortafolioWebLeo.Models;
using PortafolioWebLeo.Services;

namespace PortafolioWebLeo.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProjectsController : Controller
    {
        private readonly ProjectService _projectService;

        public ProjectsController(ProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        public ActionResult<List<Project>> Get() =>
            _projectService.Get();

        [HttpGet("{id:length(24)}", Name = "GetProject")]
        public ActionResult<Project> Get(string id)
        {
            var project = _projectService.Get(id);

            if (project == null)
            {
                return NotFound();
            }
            return project;
        }

        [HttpPost]
        public ActionResult<Project> Create(Project project)
        {
            _projectService.Create(project);

            return CreatedAtRoute("GetProject", new { id = project.Id.ToString() }, project);
        }
        [HttpPut]
        public IActionResult Update(string id, Project projectIn)
        {
            var project = _projectService.Get(id);

            if (project == null)
            {
                return NotFound();
            }
            _projectService.Update(id, projectIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var project = _projectService.Get(id);

            if (project == null)
            {
                return NotFound();
            }
            _projectService.Remove(project.Id);

            return NoContent();
        }
    }
}