TelePrompter — Remote Text Edition
===

> Este repositorio está basado en el proyecto original de **Peter Schmalfeldt**:
> **https://github.com/manifestinteractive/teleprompter**
>
> Todos los créditos del desarrollo original son de su autor. Este fork fue modificado con ayuda de **Claude AI (Anthropic)** para agregar la funcionalidad de edición de texto remota desde el servidor.

---

Modificaciones agregadas en este fork
---

- [X] Editor de texto WYSIWYG en el control remoto (negrita, cursiva, tamaño de letra)
- [X] El texto se guarda en el servidor (`teleprompter_data.json`) y persiste entre sesiones
- [X] El cliente (teleprompter) carga el texto desde el servidor al iniciar
- [X] Sincronización automática: el cliente actualiza el texto cada 2 segundos
- [X] Soporte PWA mejorado para esconder la barra de URL en celular

Instalación con Docker
---

```bash
git clone https://github.com/FatBoozy/teleprompter-remoto.git
cd teleprompter-remoto
docker-compose up -d
```

- `http://localhost:3000` → Control remoto y editor de texto
- `http://localhost:8099` → Teleprompter (pantalla del presentador)

---

Créditos originales
---

Project Support
===

Si disfrutas del proyecto original, considera apoyar al creador:

[![Become a GitHub Sponsor](https://img.shields.io/badge/Sponsor-171515.svg?logo=github&logoColor=white&style=for-the-badge "Become a GitHub Sponsor")](https://github.com/sponsors/manifestinteractive)
[![Become a Patreon Sponsor](https://img.shields.io/badge/Sponsor-FF424D.svg?logo=patreon&logoColor=white&style=for-the-badge "Become a Patreon Sponsor")](https://patreon.com/peter_schmalfeldt)
[![Donate via PayPal](https://img.shields.io/badge/Donate-169BD7.svg?logo=paypal&logoColor=white&style=for-the-badge "Donate via PayPal")](https://www.paypal.me/manifestinteractive)
[![Join Discord Community](https://img.shields.io/badge/Community-5865F2.svg?logo=discord&logoColor=white&style=for-the-badge "Join Discord Community")](https://discord.gg/jW7RemFSzx)

------

TelePrompter
===

> Browser-based TelePrompter with Remote Control

![Screenshot](assets/img/social-card.png "Screenshot")

Features
---

- [X] Edit Text in Browser
- [X] Changes Saved Automatically
- [X] Handy Keyboard Shortcuts
- [X] Advanced Controls
- [X] Remote Control Support

Free to Use
---

Our Open Source TelePrompter is Available Online:

[![Launch](https://img.shields.io/badge/Launch_TelePrompter-blue.svg?logo=azure-data-explorer&style=for-the-badge&logoColor=white)](https://promptr.tv)

Keyboard Shortcuts
---

Key              | Alternatives                            | Description
:---------------:|:---------------------------------------:|:--------------------------
<kbd>↑</kbd>     |                                         | Increase Font Size
<kbd>↓</kbd>     |                                         | Decrease Font Size
<kbd>←</kbd>     | <kbd>PAGE UP</kbd>                      | Slow Down Teleprompter
<kbd>→</kbd>     | <kbd>PAGE DOWN</kbd>                    | Speed Up Teleprompter
<kbd>SPACE</kbd> | <kbd>B</kbd> <kbd>F5</kbd> <kbd>.</kbd> | Start / Stop Teleprompter
<kbd>ESC</kbd>   |                                         | Resets GUI

We also made an effort to make sure your text will be easy to read.   So if you are pasting text from a word document, we'll do some cleaning up to make the breaks flow more easily.
