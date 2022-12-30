namespace Core.Entities;

public class ProductItemOrdered
{
    public ProductItemOrdered()
    {
    }


    public ProductItemOrdered(int productItemId, string productName, string pictureUrl)
    {
        this.productItemId = productItemId;
        this.productName = productName;
        this.pictureUrl = pictureUrl;
    }

    public int productItemId { get; set; }
    public string productName { get; set; }
    public string pictureUrl { get; set; }
}