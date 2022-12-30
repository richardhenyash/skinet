using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config;

public class OrderConfiguration : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        builder.OwnsOne(O => O.ShipToAddress, a =>
        {
            a.WithOwner();
        });
        builder.Property(s => s.Status)
            .HasConversion(
                o => o.ToString(),
                o => (OrderStatus)Enum.Parse(typeof(OrderStatus), o)
            );
        builder.HasMany(o => o.OrderItems).WithOne().OnDelete
            (DeleteBehavior.Cascade);
    }
}