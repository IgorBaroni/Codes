using codesApi.Data;
using codesApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace codesApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardController : ControllerBase
    {
        private readonly IRepository _repository;

        public CardController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repository.GetAll();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var result = await _repository.GetById(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Card model)
        {
            try
            {
                if(model.Description == "" || model.Link == "") return BadRequest("Os valores informados não são válidos!");
                _repository.Add(model);

                if(await _repository.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Card model)
        {
            try
            {
                var card = await _repository.GetById(id);
                
                if(card == null) return NotFound("Card não encontrado");
                if(model.Description == "") return BadRequest("Insira um valor válido!");
                _repository.Update(model);

                if(await _repository.SaveChangesAsync())
                {
                    return Ok(model);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var card = await _repository.GetById(id);
                
                if(card == null) return NotFound();

                _repository.Delete(card);

                if(await _repository.SaveChangesAsync())
                {
                    return Ok(new { message = "Card Deletado" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }

            return BadRequest();
        }
    }
}