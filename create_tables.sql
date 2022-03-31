
-- Table Player --
CREATE TABLE IF NOT EXISTS public."Player"
(
    "USERNAME" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    "EMAIL" character varying(60) COLLATE pg_catalog."default" NOT NULL,
    "FIRST_NAME" text COLLATE pg_catalog."default" NOT NULL,
    "LAST_NAME" text COLLATE pg_catalog."default" NOT NULL,
    "BIRTHDATE" date NOT NULL,
    "PASSWORD" character varying(60) COLLATE pg_catalog."default" NOT NULL,
    "K" integer DEFAULT 10,
    "XP" integer DEFAULT 0,
    "WISHES" integer DEFAULT 1,
    CONSTRAINT "Player_pkey" PRIMARY KEY ("USERNAME")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Player"
    OWNER to postgres;


-- Table Idol --
CREATE TABLE IF NOT EXISTS public."Idol"
(
    "IDOL_ID" smallint NOT NULL,
    "STAGE_NAME" character varying(25) COLLATE pg_catalog."default",
    "KOREAN_NAME" character varying(10) COLLATE pg_catalog."default",
    "LEAGUE" smallint NOT NULL DEFAULT 1,
    "BASE" smallint,
    "POSITION" character varying[] COLLATE pg_catalog."default",
    "IMAGE" character varying[] COLLATE pg_catalog."default",
    "GROUP_NAME" character varying(25) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Idol_pkey" PRIMARY KEY ("IDOL_ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Idol"
    OWNER to postgres;


-- Table Card --
CREATE TABLE IF NOT EXISTS public."Card"
(
    "CARD_ID" integer NOT NULL,
    "IDOL_ID" integer NOT NULL,
    "XP" integer DEFAULT 0,
    "STACKS" smallint DEFAULT 0,
    "USERNAME" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Card_pkey" PRIMARY KEY ("CARD_ID"),
    CONSTRAINT "IDOL_ID" FOREIGN KEY ("IDOL_ID")
        REFERENCES public."Idol" ("IDOL_ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "USERNAME" FOREIGN KEY ("USERNAME")
        REFERENCES public."Player" ("USERNAME") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Card"
    OWNER to postgres;


-- Table Party --
CREATE TABLE IF NOT EXISTS public."Party"
(
    "PARTY_NUM" smallint NOT NULL,
    "CARD_ID" integer NOT NULL,
    "USERNAME" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Party_pkey" PRIMARY KEY ("PARTY_NUM", "USERNAME"),
    CONSTRAINT "CARD_ID" FOREIGN KEY ("CARD_ID")
        REFERENCES public."Card" ("CARD_ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "USERNAME" FOREIGN KEY ("USERNAME")
        REFERENCES public."Player" ("USERNAME") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Party"
    OWNER to postgres;



-- == POPULATE WITH DATA == --

-- BLACKPINK --
INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0001, 'Lisa', '리사', 'BLACKPINK', 4, 200, '{"Main Dancer", "Lead Rapper", "Sub Vocalist", "Maknae"}', '/images/idols/blackpink/lisa.jpeg');

INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0002, 'Jennie', '제니', 'BLACKPINK', 4, 200, '{"Main Dancer", "Lead Vocalist"}', '/images/idols/blackpink/jennie.jpeg');

INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0003, 'Rosé', '로제', 'BLACKPINK', 4, 200, '{"Main Vocalist", "Lead Dancer"}', '/images/idols/blackpink/rose.jpeg');

INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0004, 'Jisoo', '지수', 'BLACKPINK', 4, 200, '{"Lead Vocalist", "Visual"}', '/images/idols/blackpink/jisoo.jpeg');

-- ITZY --
INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0005, 'Yeji', '예지', 'ITZY', 4, 200, '{"Leader", "Main Dancer", "Lead Vocalist", "Sub Rapper"}', '/images/idols/itzy/jisoo.jpeg');

INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0006, 'Lia', '리아', 'ITZY', 4, 200, '{"Main Vocalist", "Sub Rapper"}', '/images/idols/itzy/lia.jpeg');

INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0007, 'Ryujin', '류진', 'ITZY', 4, 200, '{"Main Rapper", "Lead Dancer", "Sub Vocalist", "Center"}', '/images/idols/itzy/ryujin.jpeg');

INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0008, 'Chaeryeong', '채령', 'ITZY', 4, 200, '{"Main Dancer", "Sub Vocalist", "Sub Rapper"}', '/images/idols/itzy/chaeryeong.jpeg');

INSERT INTO public."Idol"(
	"IDOL_ID", "STAGE_NAME", "KOREAN_NAME", "GROUP_NAME", "LEAGUE", "BASE", "POSITIONS", "IMAGE")
	VALUES (0009, 'Yuna', '유나', 'ITZY', 4, 200, '{"Lead Rapper", "Lead Dancer", "Sub Vocalist", "Visual", "Maknae"}', '/images/idols/itzy/yuna.jpeg');