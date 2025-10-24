<template>
    <div class="min-h-screen bg-gray-900 font-['Poppins'] text-green-400 flex flex-col">
      <!-- Terminal Header -->
      <div class="bg-gray-800 p-2 flex justify-between items-center border-b border-gray-700">
        <div class="flex items-center">
          <div class="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
          <div class="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
        </div>
        <div class="text-center text-gray-400 text-sm">ezeckiel_dadjo@secure_terminal:~</div>
        <div class="text-gray-400 text-sm">{{ currentTime }}</div>
      </div>
  
      <!-- Terminal Body -->
      <div 
        ref="terminalBody" 
        class="flex-1 p-4 overflow-y-auto font-mono text-sm"
        @click="focusInput"
        :class="{ 'glitch': isGlitching }"
      >
        <!-- Welcome Message -->
        <div v-if="bootSequenceComplete">
          <div class="mb-4">
            <pre class="text-[#478CF7] text-xs sm:text-sm md:text-base leading-tight">
   _____       _               _____                      _ _        
  /  ___|     | |             /  ___|                    (_) |        
  \ `--.  ___ | |_ __ _ _ __  \ `--.  ___  ___ _   _ _ __ _| |_ _   _ 
   `--. \/ _ \| __/ _` | '__|  `--. \/ _ \/ __| | | | '__| | __| | | |
  /\__/ / (_) | || (_| | |    /\__/ /  __/ (__| |_| | |  | | |_| |_| |
  \____/ \___/ \__\__,_|_|    \____/ \___|\___|\__,_|_|  |_|\__|\__, |
                                                                 __/ |
                                                                |___/ 
            </pre>
          </div>
          
          <p class="text-[#D88730] mb-4">Bienvenue dans le terminal sécurisé de Ezeckiel Dadjo, Ingénieur en Cybersécurité.</p>
          <p class="mb-2">Tapez <span class="text-white bg-gray-700 px-1">help</span> pour voir les commandes disponibles.</p>
          
          <!-- Photo Modal -->
          <div v-if="showPhotoModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80" @click="showPhotoModal = false">
            <div class="bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto" @click.stop>
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-[#478CF7] font-bold">ID: JD-CYBERSEC-42</h3>
                <button @click="showPhotoModal = false" class="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="relative">
                <img 
                src="../../../assets/images/eze.jpg" 
                  alt="Ezeckiel Dadjo" 
                  class="w-full h-auto rounded-md border-2 border-[#478CF7]"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 p-2">
                  <p class="text-white text-sm">Ezeckiel Dadjo | Ingénieur en Cybersécurité</p>
                  <p class="text-[#D88730] text-xs">Niveau d'accréditation: TOP SECRET</p>
                </div>
              </div>
              <div class="mt-4 text-gray-300 text-sm">
                <p class="mb-2"><span class="text-[#478CF7]">Statut:</span> Actif</p>
                <p class="mb-2"><span class="text-[#478CF7]">Spécialité:</span> Sécurité offensive & défensive</p>
                <p><span class="text-[#478CF7]">Dernière mise à jour:</span> {{ new Date().toLocaleDateString() }}</p>
              </div>
            </div>
          </div>
          
          <!-- Command History -->
          <div v-for="(entry, index) in commandHistory" :key="index" class="mb-2">
            <div class="flex">
              <span class="text-[#478CF7] mr-2">$</span>
              <span>{{ entry.command }}</span>
            </div>
            <div v-if="entry.response" class="pl-4 mt-1 whitespace-pre-wrap" v-html="entry.response"></div>
            
            <!-- ASCII Art Photo -->
            <div v-if="entry.showAsciiPhoto" class="pl-4 mt-2 mb-4 font-mono text-xs leading-none">
              <pre class="text-[#478CF7]">
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
              </pre>
            </div>
            
            <!-- Real Photo Thumbnail -->
            <div v-if="entry.showPhotoThumbnail" class="pl-4 mt-2 mb-4">
              <div class="inline-block relative cursor-pointer" @click="showPhotoModal = true">
                <img 
                src="../../../assets/images/eze.jpg"  
                  alt="Ezeckiel Dadjo" 
                  class="h-32 w-32 object-cover rounded-md border-2 border-[#478CF7] hover:border-[#D88730] transition-colors"
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 p-1 text-center">
                  <p class="text-white text-xs">Cliquez pour agrandir</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Current Command Line -->
          <div class="flex items-center">
            <span class="text-[#478CF7] mr-2">$</span>
            <input 
              ref="commandInput"
              v-model="currentCommand" 
              @keyup.enter="executeCommand"
              class="bg-transparent border-none outline-none flex-1 text-green-400 font-mono"
              autocomplete="off"
              spellcheck="false"
            />
          </div>
        </div>
        
        <!-- Boot Sequence -->
        <div v-else>
          <div v-for="(line, index) in bootSequence" :key="index" class="mb-1">
            <span v-if="line.loaded" :class="line.class">{{ line.text }}</span>
          </div>
          <div v-if="bootProgress < 100" class="mt-4">
            <div class="w-full bg-gray-700 rounded-full h-2.5">
              <div class="bg-[#478CF7] h-2.5 rounded-full" :style="{ width: `${bootProgress}%` }"></div>
            </div>
            <div class="text-center mt-2">Chargement du système... {{ bootProgress }}%</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed, nextTick } from 'vue';
  
  // Terminal state
  const currentCommand = ref('');
  const commandHistory = ref([]);
  const terminalBody = ref(null);
  const commandInput = ref(null);
  const bootSequenceComplete = ref(false);
  const bootProgress = ref(0);
  const isGlitching = ref(false);
  const showPhotoModal = ref(false);
  
  // Boot sequence lines
  const bootSequence = ref([
    { text: 'Initialisation du système...', class: 'text-white', loaded: false },
    { text: 'Chargement du kernel sécurisé v4.19.0...', class: 'text-white', loaded: false },
    { text: 'Vérification de l\'intégrité du système...', class: 'text-white', loaded: false },
    { text: '[OK] Intégrité vérifiée', class: 'text-green-400', loaded: false },
    { text: 'Détection des menaces potentielles...', class: 'text-white', loaded: false },
    { text: '[ALERTE] Tentative de connexion non autorisée détectée', class: 'text-red-500', loaded: false },
    { text: 'Blocage de l\'adresse IP malveillante...', class: 'text-white', loaded: false },
    { text: '[OK] Menace neutralisée', class: 'text-green-400', loaded: false },
    { text: 'Chargement des modules de sécurité...', class: 'text-white', loaded: false },
    { text: 'Initialisation du pare-feu...', class: 'text-white', loaded: false },
    { text: 'Configuration des règles IDS/IPS...', class: 'text-white', loaded: false },
    { text: 'Chargement des certificats SSL/TLS...', class: 'text-white', loaded: false },
    { text: 'Établissement des connexions sécurisées...', class: 'text-white', loaded: false },
    { text: '[OK] Système sécurisé opérationnel', class: 'text-green-400', loaded: false },
    { text: 'Chargement de l\'interface utilisateur...', class: 'text-white', loaded: false },
  ]);
  
  // Current time
  const currentTime = computed(() => {
    const now = new Date();
    return now.toLocaleTimeString();
  });
  
  // Available commands
  const commands = {
    help: {
      description: 'Affiche la liste des commandes disponibles',
      action: () => {
        return `
  <span class="text-[#D88730] font-bold">COMMANDES DISPONIBLES:</span>
  
  <span class="text-white">help</span>       - Affiche cette liste de commandes
  <span class="text-white">about</span>      - À propos de Ezeckiel Dadjo
  <span class="text-white">skills</span>     - Compétences en cybersécurité
  <span class="text-white">experience</span> - Expérience professionnelle
  <span class="text-white">education</span>  - Formation académique
  <span class="text-white">certifications</span> - Certifications professionnelles
  <span class="text-white">projects</span>   - Projets en cybersécurité
  <span class="text-white">contact</span>    - Informations de contact
  <span class="text-white">photo</span>      - Affiche la photo de profil
  <span class="text-white">photo --ascii</span> - Affiche la photo en ASCII art
  <span class="text-white">clear</span>      - Efface l'écran du terminal
  <span class="text-white">matrix</span>     - Active l'effet Matrix
  <span class="text-white">hack</span>       - Simulation d'une attaque
  `;
      }
    },
    about: {
      description: 'À propos de Ezeckiel Dadjo',
      action: () => {
        return `
  <span class="text-[#D88730] font-bold">Ezeckiel Dadjo - INGÉNIEUR EN CYBERSÉCURITÉ</span>
  
  Ingénieur en cybersécurité passionné avec plus de 5 ans d'expérience dans la protection 
  des infrastructures critiques et la sécurisation des applications. Expert en détection 
  des menaces et en réponse aux incidents.
  
  Spécialités:
  - Sécurité offensive (Red Team)
  - Tests d'intrusion
  - Analyse de vulnérabilités
  - Réponse aux incidents
  - Forensique numérique
  - Sécurité des applications
  
  <span class="text-[#478CF7]">Mission: Protéger les systèmes d'information contre les menaces émergentes 
  et former la prochaine génération de défenseurs.</span>
  `;
      }
    },
    skills: {
      description: 'Compétences en cybersécurité',
      action: () => {
        return `
  <span class="text-[#D88730] font-bold">COMPÉTENCES TECHNIQUES</span>
  
  <span class="text-[#478CF7]">Sécurité offensive:</span>
  - Pentesting (OWASP Top 10)
  - Exploitation de vulnérabilités
  - Social Engineering
  - Fuzzing et analyse statique
  
  <span class="text-[#478CF7]">Sécurité défensive:</span>
  - SIEM (Splunk, ELK)
  - EDR/XDR
  - Threat Hunting
  - Analyse de malware
  
  <span class="text-[#478CF7]">Sécurité réseau:</span>
  - Pare-feu nouvelle génération
  - IDS/IPS
  - VPN et tunneling sécurisé
  - Segmentation réseau
  
  <span class="text-[#478CF7]">Outils maîtrisés:</span>
  - Kali Linux, Metasploit, Burp Suite
  - Wireshark, Nmap, Nessus
  - Volatility, Autopsy, EnCase
  - Docker, Kubernetes (sécurité des conteneurs)
  `;
      }
    },
    experience: {
      description: 'Expérience professionnelle',
      action: () => {
        return `
  <span class="text-[#D88730] font-bold">EXPÉRIENCE PROFESSIONNELLE</span>
  
  <span class="text-[#478CF7]">Ingénieur en Cybersécurité Senior | SecureTech Solutions</span>
  <span class="text-gray-400">2020 - Présent</span>
  
  - Direction d'une équipe de 4 analystes en sécurité pour la protection des infrastructures critiques
  - Mise en place d'un SOC (Security Operations Center) qui a réduit le temps de détection des incidents de 70%
  - Réalisation d'audits de sécurité et tests d'intrusion pour des clients du secteur financier
  - Développement de procédures de réponse aux incidents et gestion de crises
  
  <span class="text-[#478CF7]">Analyste en Cybersécurité | Défense Numérique SA</span>
  <span class="text-gray-400">2018 - 2020</span>
  
  - Analyse des vulnérabilités et évaluation des risques pour des applications critiques
  - Implémentation de solutions de détection et de prévention d'intrusion (IDS/IPS)
  - Gestion des incidents de sécurité et investigation numérique
  - Formation des employés sur les bonnes pratiques de sécurité
  
  <span class="text-[#478CF7]">Stagiaire en Sécurité Informatique | CyberGuard</span>
  <span class="text-gray-400">Été 2017</span>
  
  - Participation aux tests d'intrusion et analyses de vulnérabilités
  - Développement de scripts d'automatisation pour la détection de failles
  - Veille technologique sur les nouvelles menaces et vulnérabilités
  `;
      }
    },
    education: {
      description: 'Formation académique',
      action: () => {
        return `
  <span class="text-[#D88730] font-bold">FORMATION ACADÉMIQUE</span>
  
  <span class="text-[#478CF7]">Master en Sécurité des Systèmes d'Information</span>
  <span class="text-gray-400">École Polytechnique | 2018 - 2020</span>
  
  Spécialisation en cryptographie et sécurité des réseaux. 
  Projet de fin d'études sur la détection d'intrusion basée sur l'intelligence artificielle.
  
  <span class="text-[#478CF7]">Licence en Informatique</span>
  <span class="text-gray-400">Université Paris-Saclay | 2015 - 2018</span>
  
  Formation en informatique générale avec option cybersécurité.
  Participation à plusieurs CTF (Capture The Flag) et compétitions de sécurité.
  `;
      }
    },
    certifications: {
      description: 'Certifications professionnelles',
      action: () => {
        return `
  <span class="text-[#D88730] font-bold">CERTIFICATIONS PROFESSIONNELLES</span>
  
  - <span class="text-[#478CF7]">CISSP</span> (Certified Information Systems Security Professional) | ISC² | Décembre 2021
  - <span class="text-[#478CF7]">CEH</span> (Certified Ethical Hacker) | EC-Council | Août 2021
  - <span class="text-[#478CF7]">OSCP</span> (Offensive Security Certified Professional) | Offensive Security | Mars 2021
  - <span class="text-[#478CF7]">GIAC Incident Handler</span> (GCIH) | SANS Institute | Novembre 2020
  - <span class="text-[#478CF7]">CompTIA Security+</span> | CompTIA | Juillet 2020
  - <span class="text-[#478CF7]">ISO 27001 Lead Implementer</span> | PECB | Février 2020
  `;
      }
    },
    projects: {
      description: 'Projets en cybersécurité',
      action: () => {
        return `
  <span class="text-[#D88730] font-bold">PROJETS EN CYBERSÉCURITÉ</span>
  
  <span class="text-[#478CF7]">Mise en place d'un SOC</span>
  Conception et implémentation d'un centre opérationnel de sécurité pour une entreprise du CAC 40.
  Technologies: Splunk, TheHive, MISP, Wazuh
  
  <span class="text-[#478CF7]">Architecture de Sécurité Réseau</span>
  Refonte complète de l'architecture de sécurité réseau d'une institution financière.
  Technologies: Palo Alto, Cisco, Fortinet, Zero Trust Architecture
  
  <span class="text-[#478CF7]">Plateforme de Threat Intelligence</span>
  Développement d'une solution de veille sur les menaces avec visualisation en temps réel.
  Technologies: MISP, OpenCTI, ELK Stack, Python
  
  <span class="text-[#478CF7]">Tests d'Intrusion</span>
  Réalisation de tests d'intrusion complets pour des infrastructures critiques.
  Technologies: Kali Linux, Metasploit, Burp Suite, Custom Exploits
  
  <span class="text-[#478CF7]">Gestion de Crise Cyber</span>
  Élaboration et test de plans de réponse aux incidents pour plusieurs secteurs.
  Méthodologies: NIST, ISO 27035, SANS
  
  <span class="text-[#478CF7]">Formation et Sensibilisation</span>
  Programme de sensibilisation à la sécurité pour plus de 5000 employés.
  Approche: Phishing simulé, Gamification, Microlearning
  `;
      }
    },
    contact: {
      description: 'Informations de contact',
      action: () => {
        return `
  <span class="text-[#D88730] font-bold">CONTACT</span>
  
  <span class="text-[#478CF7]">Email:</span> john.doe@securecyber.com
  <span class="text-[#478CF7]">LinkedIn:</span> linkedin.com/in/johndoe-cyber
  <span class="text-[#478CF7]">GitHub:</span> github.com/johndoe-security
  <span class="text-[#478CF7]">Twitter:</span> @johndoe_cyber
  
  <span class="text-white">Pour me contacter de manière sécurisée, utilisez ma clé PGP:</span>
  <span class="text-xs text-gray-400">
  -----BEGIN PGP PUBLIC KEY BLOCK-----
  mQINBGJDfS8BEADJVIj1eS9qDQAKqVhj3hkLQjDwgTmHw/PDEGHN8vZZk9/Z0qWD
  ...clé tronquée pour la lisibilité...
  -----END PGP PUBLIC KEY BLOCK-----
  </span>
  `;
      }
    },
    photo: {
      description: 'Affiche la photo de profil',
      action: (args) => {
        // Check if ASCII mode is requested
        if (args && args.includes('--ascii')) {
          const lastIndex = commandHistory.value.length - 1;
          commandHistory.value[lastIndex].showAsciiPhoto = true;
          return '<span class="text-[#478CF7]">Affichage de la photo en mode ASCII...</span>';
        } else {
          const lastIndex = commandHistory.value.length - 1;
          commandHistory.value[lastIndex].showPhotoThumbnail = true;
          return '<span class="text-[#478CF7]">Chargement de la photo de profil...</span>';
        }
      }
    },
    clear: {
      description: 'Efface l\'écran du terminal',
      action: () => {
        commandHistory.value = [];
        return '';
      }
    },
    matrix: {
      description: 'Active l\'effet Matrix',
      action: () => {
        startMatrixEffect();
        return '<span class="text-green-500">Initialisation de la séquence Matrix...</span>';
      }
    },
    hack: {
      description: 'Simulation d\'une attaque',
      action: () => {
        simulateHack();
        return '<span class="text-red-500">ATTENTION: Simulation d\'attaque en cours...</span>';
      }
    }
  };
  
  // Execute command
  const executeCommand = async () => {
    const commandInput = currentCommand.value.trim();
    const commandParts = commandInput.split(' ');
    const command = commandParts[0].toLowerCase();
    const args = commandParts.slice(1).join(' ');
    
    if (command) {
      // Add command to history
      commandHistory.value.push({
        command: commandInput,
        response: '',
        showAsciiPhoto: false,
        showPhotoThumbnail: false
      });
      
      // Clear current command
      currentCommand.value = '';
      
      // Process command
      if (commands[command]) {
        const response = commands[command].action(args);
        
        // Simulate typing effect for response
        const currentIndex = commandHistory.value.length - 1;
        
        if (response) {
          await simulateTyping(response, currentIndex);
        }
      } else {
        commandHistory.value[commandHistory.value.length - 1].response = 
          `<span class="text-red-500">Commande non reconnue: ${command}</span>`;
      }
      
      // Scroll to bottom
      await nextTick();
      if (terminalBody.value) {
        terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
      }
    }
  };
  
  // Simulate typing effect
  const simulateTyping = async (text, historyIndex) => {
    const typingSpeed = 5; // ms per character
    
    for (let i = 0; i <= text.length; i++) {
      commandHistory.value[historyIndex].response = text.substring(0, i);
      
      // Scroll to bottom
      await nextTick();
      if (terminalBody.value) {
        terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
      }
      
      await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }
  };
  
  // Focus input
  const focusInput = () => {
    if (commandInput.value) {
      commandInput.value.focus();
    }
  };
  
  // Boot sequence animation
  const animateBootSequence = async () => {
    const bootDelay = 100; // ms between boot lines
    
    for (let i = 0; i < bootSequence.value.length; i++) {
      bootSequence.value[i].loaded = true;
      bootProgress.value = Math.floor((i / bootSequence.value.length) * 100);
      
      await nextTick();
      if (terminalBody.value) {
        terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
      }
      
      await new Promise(resolve => setTimeout(resolve, bootDelay + Math.random() * 200));
    }
    
    bootProgress.value = 100;
    await new Promise(resolve => setTimeout(resolve, 500));
    bootSequenceComplete.value = true;
    
    // Auto-focus input after boot
    await nextTick();
    focusInput();
  };
  
  // Matrix effect
  const startMatrixEffect = async () => {
    // Create canvas for matrix effect
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '1000';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const columns = Math.floor(canvas.width / 20);
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }
    
    // Draw matrix
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0f0';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };
    
    // Animate matrix
    let matrixInterval = setInterval(draw, 50);
    
    // Stop matrix after 10 seconds
    setTimeout(() => {
      clearInterval(matrixInterval);
      document.body.removeChild(canvas);
    }, 10000);
  };
  
  // Simulate hack
  const simulateHack = async () => {
    isGlitching.value = true;
    
    // Add fake hacking messages to history
    const hackMessages = [
      { message: 'Initialisation de la séquence d\'attaque...', delay: 500 },
      { message: 'Scan des ports en cours...', delay: 800 },
      { message: 'Ports ouverts détectés: 22, 80, 443, 3389', delay: 1000 },
      { message: 'Tentative d\'exploitation de vulnérabilités...', delay: 1200 },
      { message: 'ALERTE: Tentative d\'injection SQL détectée!', delay: 1000 },
      { message: 'Blocage de l\'attaque en cours...', delay: 1500 },
      { message: 'Contre-mesures activées', delay: 800 },
      { message: 'Traçage de l\'origine de l\'attaque...', delay: 1200 },
      { message: 'Attaque neutralisée. Système sécurisé.', delay: 1000 }
    ];
    
    for (const msg of hackMessages) {
      commandHistory.value.push({
        command: '',
        response: `<span class="${msg.message.includes('ALERTE') ? 'text-red-500' : msg.message.includes('neutralisée') ? 'text-green-500' : 'text-yellow-500'}">${msg.message}</span>`
      });
      
      await nextTick();
      if (terminalBody.value) {
        terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
      }
      
      await new Promise(resolve => setTimeout(resolve, msg.delay));
    }
    
    isGlitching.value = false;
  };
  
  // Initialize terminal
  onMounted(() => {
    // Start boot sequence
    animateBootSequence();
    
    // Focus input when clicking on terminal
    if (terminalBody.value) {
      terminalBody.value.addEventListener('click', focusInput);
    }
    
    // Handle window resize for matrix effect
    window.addEventListener('resize', () => {
      if (document.querySelector('canvas')) {
        const canvas = document.querySelector('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });
  });
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  /* Terminal cursor blink */
  input {
    caret-color: #478CF7;
    caret-shape: block;
  }
  
  /* Glitch effect */
  .glitch {
    animation: glitch 0.5s infinite;
  }
  
  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #478CF7;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #D88730;
  }
  </style>