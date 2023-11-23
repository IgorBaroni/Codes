namespace codesApi.Models
{
    public class Card
    {
        public Card() { }
        public Card(int id, string link, DateTime createdAt, string description)
        {
            Id = id;
            Link = link;
            Description = description;
            CreatedAt = createdAt;

        }
        public int Id { get; set; }
        public string Link { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Description { get; set; }
    }
}