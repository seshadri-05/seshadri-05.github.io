{
  description = "build seshadri-05.github.io locally";

  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            hugo
            vscode-langservers-extracted
            (writeScriptBin "serve" ''
              ${pkgs.hugo}/bin/hugo -D
              ${pkgs.pagefind}/bin/pagefind --output-path "static/pagefind"
              ${pkgs.hugo}/bin/hugo server -D
            '')
          ];
        };
      }
    );
}
