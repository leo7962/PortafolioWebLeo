using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PortafolioWebLeo.Models
{
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Nombre")]
        public string name { get; set; }

        public string description { get; set; }

        public string category { get; set; }

        public int year { get; set; }

        public string image { get; set; }
    }
}
