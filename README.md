
* criando com next v14
```
npx create-next-app@14 fsw-barber-v2
```

#### Prisma
```
npm install prisma --save-dev
```

```
npx prisma init
```

```
npx prisma migrate dev
```

```
npx prisma format
```

``` migrate witch name
npx prisma migrate dev --name init_db
```

#### Prisma Seed
* criar o arquivo dentro pasta prisma
   ```
   seed.ts
   ``` 
* instalar o TS-Node
```
npm install -D ts-node
```

* configurar o package.json
```
"prisma": {
    "seed": "ts-node prisma/seed.ts"
},
```

* rodar o comando
```
npx prisma db seed
```

#### Shadcn

* Docs
```
https://ui.shadcn.com/
```

* Primeiro Passo
```
npx shadcn@latest init
```

* Adicionando primeiro compoment button
```
npx shadcn@latest add button
```

#### Ref.
```ultimo visto
https://alunos.fullstackclub.com.br/area/produto/item/3676526
```

```github
https://github.com/felipemotarocha/fullstackweek-barber-v2
```

```figma
https://www.figma.com/design/ByDjVh7THsTnsSVRKNN8yy/FSW-5.0--Live-?node-id=598-1984&t=t0fpnhPMR4kkw2Fv-0
```