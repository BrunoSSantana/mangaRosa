    // valida se existe skills
    if (!skills || skills === [""]) {
      return response.status(400).json({ message: "skills Vazias" });
    }

    if (cell) {
      if (cell.length > 14) {
        return response.status(400).json({ message: "Número inválido" });
      }
    }

    // validate = false (default)
    const validate = false;
