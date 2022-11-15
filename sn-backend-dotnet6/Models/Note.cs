using System;
using System.Collections.Generic;

namespace sn_backend_dotnet6.Models;

public partial class Note
{
    public long Id { get; set; }

    public string? Description { get; set; }

    public string? Title { get; set; }
}
