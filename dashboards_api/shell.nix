{ pkgs ? import <nixos-unstable> {}, ... }:

pkgs.mkShell {
    name = "dashboards_api";
    buildInputs = with pkgs; [
        git
        postgresql
        openssl
        (python3.withPackages (p: with p; [
            fastapi
            sqlalchemy
            uvicorn
            psycopg2
            pandas
            numpy
            python-jose
            cryptography
            passlib
            bcrypt
            python-multipart
        ]))
    ];
    shellHook = '' 
        export TERM=xterm-256color
    '';
}