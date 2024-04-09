export class SearchRequestModel {
  ligands?: string;
  metals?: string;
  categories?: string;
  ligandCharges?: string;
  metalCharges?: string;
  chemicals?: string;

  public onlyHasLigands(): boolean {
    return (
      !!this.ligands &&
      !this.metals &&
      !this.categories &&
      !this.ligandCharges &&
      !this.metalCharges &&
      !this.chemicals
    );
  }

  public getRequestModel(): AdvanceSearchRequestModel {
    const ligands = this.ligands?.split(",").map((s) => s.trim()) ?? [];
    const metals = this.metals?.split(",").map((s) => s.trim()) ?? [];
    const categories = this.categories?.split(",").map((s) => s.trim()) ?? [];
    const ligandCharges =
      this.ligandCharges?.split(",").map((n) => +n.trim()) ?? [];
    const metalCharges =
      this.metalCharges?.split(",").map((n) => +n.trim()) ?? [];
    const chemicals = this.chemicals?.split(",").map((s) => s.trim()) ?? [];

    return new AdvanceSearchRequestModel(
      ligands,
      metals,
      categories,
      ligandCharges,
      metalCharges,
      chemicals,
      300
    );
  }

  constructor(
    ligands?: string,
    metals?: string,
    categories?: string,
    ligandCharges?: string,
    metalCharges?: string,
    chemicals?: string
  ) {
    this.ligands = ligands;
    this.metals = metals;
    this.categories = categories;
    this.ligandCharges = ligandCharges;
    this.metalCharges = metalCharges;
    this.chemicals = chemicals;
  }
}

export class AdvanceSearchRequestModel {
  ligands?: string[];
  metals?: string[];
  categories?: string[];
  ligandCharges?: number[];
  metalCharges?: number[];
  chemicals?: string[];
  limit?: number;

  constructor(
    ligands: string[],
    metals: string[] = [],
    categories: string[] = [],
    ligandCharges: number[] = [],
    metalCharges: number[] = [],
    chemicals: string[] = [],
    limit: number = 100
  ) {
    this.ligands = ligands;
    this.metals = metals;
    this.categories = categories;
    this.ligandCharges = ligandCharges;
    this.metalCharges = metalCharges;
    this.chemicals = chemicals;
    this.limit = limit;
  }
}
