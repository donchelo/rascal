# Guía de Imágenes para RASCAL Website

## Estructura de Carpetas

```
images/
├── product/          ← Fotos de la e-bike
├── lifestyle/        ← Fotos urbanas, personas en movimiento
└── merch/            ← Fotos de merchandising
```

## Imágenes Requeridas

### 📦 `/product/`
**bike-main.jpg** (Requerida)
- Tamaño recomendado: 1200x1200px (cuadrado) o 1200x800px
- Formato: JPG, WebP
- Descripción: Foto principal de la e-bike RASCAL
- Uso: Sección "La E-Bike"

### 🏙️ `/lifestyle/`
**hero-bg.jpg** (Opcional)
- Tamaño recomendado: 1920x1080px o mayor
- Formato: JPG, WebP
- Descripción: Imagen de fondo para el Hero (opcional, si no existe se usa fondo negro)
- Uso: Background del Hero Section

### 👕 `/merch/`
**hoodie.jpg** (Opcional)
- Tamaño recomendado: 600x600px
- Descripción: Foto de hoodie con logo script bordado

**t-shirt.jpg** (Opcional)
- Tamaño recomendado: 600x600px
- Descripción: Foto de camiseta con isotipo

**cap.jpg** (Opcional)
- Tamaño recomendado: 600x600px
- Descripción: Foto de gorra two-tone

**socks.jpg** (Opcional)
- Tamaño recomendado: 600x600px
- Descripción: Foto de medias "Trouble" / "Maker"

## Notas Importantes

1. **Formato**: Prefiere JPG para fotos (mejor compresión) o WebP (mejor optimización)
2. **Tamaño**: Las imágenes se optimizan automáticamente con Next.js Image
3. **Fallback**: Si una imagen no existe, se mostrará un placeholder automáticamente
4. **Nombres**: Usa nombres en minúsculas con guiones (kebab-case): `bike-main.jpg`
5. **Peso**: Intenta que cada imagen pese menos de 500KB antes de subirla

## Cómo Subir Imágenes

1. Copia tus imágenes a la carpeta correspondiente
2. Usa los nombres exactos indicados arriba
3. El sitio detectará automáticamente las imágenes y las mostrará
4. Si una imagen no existe, se mostrará un placeholder elegante

## Optimización

Next.js optimiza automáticamente las imágenes, pero para mejor rendimiento:
- Comprime las imágenes antes de subirlas (usa herramientas como TinyPNG o Squoosh)
- Usa WebP cuando sea posible
- Mantén las dimensiones razonables (no subas imágenes de 5000px si solo necesitas 1200px)

